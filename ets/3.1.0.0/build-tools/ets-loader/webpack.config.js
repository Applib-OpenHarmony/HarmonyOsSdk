/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const { GenAbcPlugin } = require('./lib/gen_abc_plugin');
const buildPipeServer = require('./server/build_pipe_server');

const {
  projectConfig,
  loadEntryObj,
  readAppResource,
  resources,
  loadWorker,
  abilityConfig
} = require('./main');
const { ResultStates } = require('./lib/compile_info');
const { processUISyntax } = require('./lib/process_ui_syntax');
const { IGNORE_ERROR_CODE } = require('./lib/utils');
const { BUILD_SHARE_PATH } = require('./lib/pre_define');

const watchMode = (process.env.watchMode && process.env.watchMode === 'true') || false;

function initConfig(config) {
  const projectPath = path.resolve(projectConfig.projectPath);
  Object.assign(config, {
    entry: projectConfig.entryObj,
    watch: watchMode,
    watchOptions: {
      aggregateTimeout: 10,
      poll: false,
      ignored: /node_modules/
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: "vendors",
            chunks: 'initial'
          },
          commons: {
            name: 'commons',
            priority: -20,
            minChunks: 2,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      },
    },
    output: {
      path: path.resolve(__dirname, projectConfig.buildPath),
      filename: '[name].js',
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      globalObject: 'globalThis'
    },
    devtool: 'nosources-source-map',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(ets|ts)$/,
          use: [
            { loader: path.resolve(__dirname, 'lib/result_process.js') },
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.ets$/],
                onlyCompileBundledFiles: true,
                configFile: path.resolve(__dirname, 'tsconfig.json'),
                getCustomTransformers(program) {
                  return {
                    before: [processUISyntax(program)],
                    after: []
                  };
                },
                ignoreDiagnostics: IGNORE_ERROR_CODE
              }
            },
            { loader: path.resolve(__dirname, 'lib/pre_process.js') }
          ]
        },
        {
          test: /\.js$/,
          use: [
            { loader: path.resolve(__dirname, 'lib/process_system_module.js') }
          ]
        }
      ]
    },
    node: {
      global: false
    },
    resolve: {
      extensions: ['.js', '.ets', '.ts'],
      modules: [
        projectPath,
        path.join(projectPath, '../../../../../'),
        './node_modules',
        path.join(__dirname, 'node_modules')
      ]
    },
    stats: { preset: 'none' },
    plugins: [
      new Webpack.WatchIgnorePlugin({
        paths: [
          /\.js$/,
          /\.d\.ts$/
        ]
      }),
      new CleanWebpackPlugin(),
      new ResultStates()
    ]
  });
}

function setProjectConfig(envArgs) {
  const args = Object.keys(envArgs);
  if (args.indexOf('projectName') === args.length - 2) {
    projectConfig.projectPath = path.join(process.cwd(), args[args.length - 1]);
  }
  if (envArgs.aceModuleRoot) {
    projectConfig.projectPath = envArgs.aceModuleRoot;
  }
  if (envArgs.aceModuleBuild) {
    projectConfig.buildPath = envArgs.aceModuleBuild;
  }
  if (envArgs.aceManifestPath) {
    projectConfig.manifestFilePath = envArgs.aceManifestPath;
  }
}

function setReleaseConfig(config) {
  const TerserPlugin = require('terser-webpack-plugin');
  config.mode = 'production';
  config.optimization = {
    emitOnErrors: true,
    usedExports: false,
    minimize: true,
    minimizer: [new TerserPlugin()]
  };
  config.output.sourceMapFilename = '_releaseMap/[name].js.map';
}

function setCopyPluginConfig(config) {
  const copyPluginPattrens = [];
  copyPluginPattrens.push({
    from: '**/*',
    context: path.resolve(__dirname, projectConfig.projectPath),
    globOptions: {
      ignore: [
        '**/*.ets',
        '**/*.ts',
        '**/*.js',
        path.resolve(__dirname, projectConfig.buildPath, '**').replace(/\\/g, '/')
      ]
    },
    noErrorOnMissing: true
  });
  const sharePath = path.resolve(__dirname, projectConfig.projectPath, BUILD_SHARE_PATH);
  if (fs.existsSync(sharePath)) {
    copyPluginPattrens.push({
      from: '**/*',
      context: path.resolve(__dirname, projectConfig.projectPath, BUILD_SHARE_PATH),
      to: path.resolve(__dirname, projectConfig.buildPath, BUILD_SHARE_PATH),
      globOptions: {
        ignore: [
          '**/*.ets',
          '**/*.ts',
          '**/*.js',
        ]
      },
      noErrorOnMissing: true
    });
  }
  if (abilityConfig.abilityType === 'page') {
    if (fs.existsSync(projectConfig.manifestFilePath)) {
      copyPluginPattrens.push({ from: projectConfig.manifestFilePath });
    } else if (fs.existsSync(projectConfig.aceConfigPath)) {
      copyPluginPattrens.push({ from: projectConfig.aceConfigPath });
    }
  }
  config.plugins.push(new CopyPlugin({ patterns: copyPluginPattrens }));
}

module.exports = (env, argv) => {
  const config = {};
  setProjectConfig(env);
  loadEntryObj(projectConfig);
  initConfig(config);
  setCopyPluginConfig(config);

  if (env.isPreview !== "true") {
    loadWorker(projectConfig);
    if (env.compilerType && env.compilerType === 'ark') {
      let arkDir = path.join(__dirname, 'bin', 'ark');
      if (env.arkFrontendDir) {
        arkDir = env.arkFrontendDir;
      }
      let nodeJs = 'node';
      if (env.nodeJs) {
        nodeJs = env.nodeJs;
      }
      config.plugins.push(new GenAbcPlugin(projectConfig.buildPath, arkDir, nodeJs,
        env.buildMode === 'debug'));
    }
  } else {
    projectConfig.isPreview = true;
    let port;
    process.argv.forEach((val, index) => {
      if(val.startsWith('port=')){
        port = val.split('=')[1];
      }
    });
    if (port) {
      buildPipeServer.init(port);
    }
  }

  if (env.sourceMap === 'none') {
    config.devtool = false;
  }

  if (env.buildMode === 'release') {
    setReleaseConfig(config);
  }

  const appResourcePath = env.appResource || process.env.appResource;
  if (appResourcePath) {
    readAppResource(resources, appResourcePath);
  }
  return config;
}