"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof"),_loaderUtils=_interopRequireDefault(require("loader-utils")),_path=_interopRequireDefault(require("path")),_fs=_interopRequireDefault(require("fs")),legacy=_interopRequireWildcard(require("./legacy")),_parser=require("./parser"),_util=require("./util"),_component_validator=require("./templater/component_validator");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(a,o,s):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var _require=require("./lite/lite-enum"),DEVICE_LEVEL=_require.DEVICE_LEVEL,loaderPath=__dirname,defaultLoaders={none:"",main:_path.default.resolve(loaderPath,"loader.js"),template:_path.default.resolve(loaderPath,"template.js"),style:_path.default.resolve(loaderPath,"style.js"),script:_path.default.resolve(loaderPath,"script.js"),json:_path.default.resolve(loaderPath,"json.js"),babel:(0,_util.loadBabelModule)("babel-loader"),manifest:_path.default.resolve(loaderPath,"manifest-loader.js"),resourceReferenceScript:_path.default.resolve(loaderPath,"resource-reference-script.js")};function getLoaderString(e,t){var r=loadCustomLoader(t=t||{});switch(e){case"main":return mainLoaderString(void 0);case"element":return elementLoaderString(void 0,t);case"template":return templateLoaderString(void 0,t,r);case"style":return styleLoaderString(void 0,t,r);case"script":return scriptLoaderString(void 0,t,r);case"config":return configLoaderString(void 0,t);case"data":return dataLoaderString(void 0,t)}}function loadCustomLoader(e){if(e.lang&&e.customLang[e.lang])return(0,_util.loadBabelModule)(e.customLang[e.lang][0])}function mainLoaderString(e){return e=[{name:defaultLoaders.main}],(0,_util.stringifyLoaders)(e)}function elementLoaderString(e,t){return e=[{name:defaultLoaders.main,query:{element:!t.source||void 0}}],(0,_util.stringifyLoaders)(e)}function templateLoaderString(e,t,r){return e=[{name:defaultLoaders.json},{name:defaultLoaders.template}],r&&(e=e.concat(r)),(0,_util.stringifyLoaders)(e)}function styleLoaderString(e,t,r){return e=[{name:defaultLoaders.json},{name:defaultLoaders.style}],r&&(e=e.concat(r)),(0,_util.stringifyLoaders)(e)}function scriptLoaderString(e,t,r){return e=[{name:defaultLoaders.script}],r?e=e.concat(r):(e.push({name:defaultLoaders.babel,query:{presets:[(0,_util.loadBabelModule)("@babel/preset-env")],plugins:[(0,_util.loadBabelModule)("@babel/plugin-transform-modules-commonjs")],comments:"false"}}),e.push({name:defaultLoaders.resourceReferenceScript})),t.app&&"page"===process.env.abilityType&&_fs.default.existsSync(process.env.aceManifestPath)&&e.push({name:defaultLoaders.manifest,query:{path:t.source}}),(0,_util.stringifyLoaders)(e)}function configLoaderString(e,t){return e=[{name:defaultLoaders.json}],(0,_util.stringifyLoaders)(e)}function dataLoaderString(e,t){return e=[{name:defaultLoaders.json}],(0,_util.stringifyLoaders)(e)}function loader(e){this.cacheable&&this.cacheable();var t={sass:["sass-loader"],scss:["sass-loader"],less:["less-loader"]}||{},r=this.resourceQuery&&_loaderUtils.default.parseQuery(this.resourceQuery)||{},a=r.entry,n=_path.default.parse(this.resourcePath),o=a?n.name:r.name||(0,_util.getNameByPath)(this.resourcePath);if((0,_component_validator.isReservedTag)(o)&&"page"===process.env.abilityType)return(0,_util.logWarn)(this,[{reason:"ERROR: The file name cannot contain reserved tag name: "+o}]),"";var s="";return s+=loadApp(this,o,a,t,e),s+=loadPage(this,o,a,t,e)}function checkApp(e){return e.resourcePath===_path.default.resolve(process.env.projectPath,"page"===process.env.abilityType?"app.js":"".concat(process.env.abilityType,".js"))}function loadApp(e,t,r,a,n){var o="",s=!1;if(checkApp(e)){var i=e.resourcePath.replace(_path.default.extname(e.resourcePath).toString(),"")+".css";return _fs.default.existsSync(i)?(s=!0,o+="var $app_style$ = "+(0,_util.getRequireString)(e,getLoaderString("style",{customLang:a,lang:void 0,element:void 0,elementName:void 0,source:i}),i)):s=!1,o+="var $app_script$ = "+(0,_util.getRequireString)(e,getLoaderString("script",{customLang:a,lang:void 0,element:void 0,elementName:void 0,source:e.resourcePath,app:!0}),e.resourcePath),process.env.DEVICE_LEVEL!==DEVICE_LEVEL.RICH&&"card"!==process.env.DEVICE_LEVEL||(o+="\n      $app_define$('@app-application/".concat(t,"', [], function($app_require$, $app_exports$, $app_module$) {\n      ")+"\n      $app_script$($app_module$, $app_exports$, $app_require$)\n      if ($app_exports$.__esModule && $app_exports$.default) {\n        $app_module$.exports = $app_exports$.default\n      }\n      "+(s?"\n      $app_module$.exports.style = $app_style$\n      ":"")+"\n      })\n      ",r&&(o+="$app_bootstrap$('@app-application/".concat(t,"'")+",undefined,undefined)")),process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE&&(o+="var options=$app_script$\n if ($app_script$.__esModule) {\n\n        options = $app_script$.default;\n }\n"+(s?"options.styleSheet=$app_style$\n":"")+"module.exports=new ViewModel(options);"),o}return/\.js$/.test(e.resourcePath)?n:o}function loadPage(e,t,r,a,n){var o="";if(_path.default.extname(e.resourcePath).match(/\.hml/)){var s=e.resourcePath.replace(_path.default.extname(e.resourcePath).toString(),""),i=e.resourcePath,l=(_loaderUtils.default.getOptions(e)||{}).element,u=(0,_parser.parseFragment)(n);o+=loadPageCheckElementLength(e,u.element.length,u,[],i,a),o+="var $app_template$ = "+(0,_util.getRequireString)(e,getLoaderString("template",{customLang:a,lang:void 0,element:l,elementName:l?t:void 0,source:e.resourcePath}),e.resourcePath);var p=loadPageFindCss(e,s,a),c=p.extcss;o+=p.output;var d=loadPageFindJs(e,s,a),f=d.extscript;return o+=d.output,o+=process.env.DEVICE_LEVEL===DEVICE_LEVEL.RICH?loadPageCheckRich(t,f,c,r):loadPageCheckLite(f,c)}return o}function loadPageCheckElementLength(e,t,r,a,n,o){var s="";if(t)for(var i=0;i<t;i++){var l=r.element[i],u=n;if(!l.src)return(0,_util.logWarn)(e,[{reason:"ERROR: src attributes must be set for custom elements."}]),"";(u=l.src).match(/\.hml$/)||(u=u.concat(".hml"));var p=_path.default.join(_path.default.dirname(n),u);if(!_fs.default.existsSync(p)&&u.match(/^(\/|\.)/))return(0,_util.logWarn)(e,[{reason:"ERROR: The file path of custom element does not exist, src: "+u}]),"";l.name||(l.name=_path.default.parse(u).name),checkEntry(e,p,l.src),a.push(l.name),s+=(0,_util.getRequireString)(e,getLoaderString("element",{customLang:o,name:l.name,source:u}),"".concat(u,"?name=").concat(l.name.toLowerCase()))}return s}function loadPageFindCss(e,t,r){var a="",n=!1,o=t+".css";if(_fs.default.existsSync(o))n=!0,a="var $app_style$ = "+(0,_util.getRequireString)(e,getLoaderString("style",{customLang:r,lang:void 0,element:void 0,elementName:void 0,source:o}),o);else{var s=t+".less";if(_fs.default.existsSync(s))n=!0,a="var $app_style$ = "+(0,_util.getRequireString)(e,getLoaderString("style",{customLang:r,lang:"less",element:void 0,elementName:void 0,source:s}),s);else{var i=t+".scss";if(_fs.default.existsSync(i))n=!0,a="var $app_style$ = "+(0,_util.getRequireString)(e,getLoaderString("style",{customLang:r,lang:"scss",element:void 0,elementName:void 0,source:i}),i);else{var l=t+".sass";_fs.default.existsSync(l)?(n=!0,a="var $app_style$ = "+(0,_util.getRequireString)(e,getLoaderString("style",{customLang:r,lang:"sass",element:void 0,elementName:void 0,source:l}),l)):n=!1}}}return{extcss:n,output:a}}function loadPageFindJs(e,t,r){var a="",n=!1,o=t+".js";return _fs.default.existsSync(o)?(n=!0,a="var $app_script$ = "+(0,_util.getRequireString)(e,getLoaderString("script",{customLang:r,lang:void 0,element:void 0,elementName:void 0,source:o}),o)):(n=!1,console.log("missing "+o)),{extscript:n,output:a}}function loadPageCheckRich(e,t,r,a){var n="";return n+="\n$app_define$('@app-component/".concat(e,"', [], function($app_require$, $app_exports$, $app_module$) {\n")+(t?"\n$app_script$($app_module$, $app_exports$, $app_require$)\nif ($app_exports$.__esModule && $app_exports$.default) {\n$app_module$.exports = $app_exports$.default\n}\n":"")+"\n$app_module$.exports.template = $app_template$\n"+(r?"\n$app_module$.exports.style = $app_style$\n":"")+"\n})\n",a&&(n+="$app_bootstrap$('@app-component/".concat(e,"'")+",undefined,undefined)"),n}function loadPageCheckLite(e,t){return(e?"var options=$app_script$\n if ($app_script$.__esModule) {\n\n      options = $app_script$.default;\n }\n":"var options={}\n")+(t?"options.styleSheet=$app_style$\n":"")+"options.render=$app_template$;\nmodule.exports=new ViewModel(options);"}for(var key in legacy)loader[key]=legacy[key];function checkEntry(e,t,r){if(e._compilation.entries){var a,n=_createForOfIteratorHelper(e._compilation.entries.keys());try{for(n.s();!(a=n.n()).done;){var o=a.value;_path.default.join(_path.default.resolve(process.env.projectPath),o+".hml")===t&&(0,_util.logWarn)(e,[{reason:'WARNING: The page "'.concat(r,"\" configured in 'config.json'")+" can not be uesd as a custom component.To ensure that the debugging function is normal, please delete this page in 'config.json'."}])}}catch(e){n.e(e)}finally{n.f()}}}module.exports=loader;