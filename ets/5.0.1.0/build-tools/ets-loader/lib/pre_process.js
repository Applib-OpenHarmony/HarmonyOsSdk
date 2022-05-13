"use strict";var _typescript=_interopRequireDefault(require("typescript")),_fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_sourceMap=require("source-map"),_validate_ui_syntax=require("./validate_ui_syntax"),_utils=require("./utils"),_pre_define=require("./pre_define"),_main=require("../main.js"),_codegen_ets=require("../codegen/codegen_ets.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}const visualMap=new Map,slotMap=new Map;function preProcess(e){if(process.env.compiler=_pre_define.BUILD_ON,/\.ets$/.test(this.resourcePath)){const n=(0,_validate_ui_syntax.sourceReplace)(e,this.resourcePath);var t=n.content,r=n.log.concat((0,_validate_ui_syntax.validateUISyntax)(e,t,this.resourcePath,this.resourceQuery)),t=parseVisual(this.resourcePath,this.resourceQuery,t,r,e);return r.length&&(0,_utils.emitLogInfo)(this,r),t}return(0,_validate_ui_syntax.processSystemApi)(e,!1,this.resourcePath)}function parseVisual(e,t,r,n,i){var s=this;if(!_validate_ui_syntax.componentCollection.entryComponent||!_main.projectConfig.aceSuperVisualPath)return r;var a=findVisualFile(e);if(!a||!_fs.default.existsSync(a))return r;const o=getVisualContent(a,n);if(!o)return r;visualMap.clear(),slotMap.clear();a=_typescript.default.readConfigFile(_path.default.resolve(__dirname,"../tsconfig.json"),_typescript.default.sys.readFile).config.compilerOptions;Object.assign(a,{sourceMap:!1});const u=_typescript.default.createSourceFile(e,r,_typescript.default.ScriptTarget.Latest,!0,_typescript.default.ScriptKind.ETS,a);let l=r;u.statements&&u.statements.forEach(function(e){_newArrowCheck(this,s),l=parseStatement(e,l,n,o)}.bind(this));const p=(0,_validate_ui_syntax.sourceReplace)(l,e);l=p.content;t=p.log.concat((0,_validate_ui_syntax.validateUISyntax)(i,l,e,t));return n.concat(t),n.length||generateSourceMapForNewAndOriEtsFile(e,i),l}function parseStatement(t,r,n,i){var s=this;return t.kind===_typescript.default.SyntaxKind.StructDeclaration&&t.name&&t.name.getText()===_validate_ui_syntax.componentCollection.entryComponent&&t.members&&t.members.forEach(function(e){_newArrowCheck(this,s),e.kind&&e.kind===_typescript.default.SyntaxKind.MethodDeclaration&&(r=parseMember(t,e,r,n,i))}.bind(this)),r}function parseMember(e,t,r,n,i){let s=r;if(t.name&&"build"===t.name.getText()){const a=t.getText();"build(){}"===a.replace(/\ +/g,"").replace(/[\r\n]/g,"")?s=insertVisualCode(e,t,i,s):n.push({type:_utils.LogType.ERROR,message:"when the corresponding visual file exists, the build function of the entry component must be empty.",pos:t.pos})}return s}function insertVisualCode(e,t,r,n){return insertAboutToAppear(e,t,r,insertBuild(t,r,insertVarAndFunc(t,r,insertImport(r,n),n),n),n)}function insertImport(e,t){if(!e.etsImport)return t;const r=e.etsImport+"\n";t=r+t;return slotMap.set(0,r.length),visualMap.set(0,r.split("\n").length-1),t}function insertVarAndFunc(e,t,r,n){t=(t.etsVariable||"")+(t.etsFunction||"");return t?insertVisualCodeBeforePos(e,"\n"+t,r,n):r}function insertBuild(e,t,r,n){return t.build?insertVisualCodeAfterPos(e.body,"\n"+t.build+"\n",r,n):r}function insertAboutToAppear(e,t,r,n,i){if(!r.aboutToAppear)return n;for(const s of e.members)if(s.kind&&s.kind===_typescript.default.SyntaxKind.MethodDeclaration&&s.name&&"aboutToAppear"===s.name.getText())return insertVisualCodeAfterPos(s.body,"\n"+r.aboutToAppear,n,i);return insertVisualCodeBeforePos(t,"\n  aboutToAppear() {\n"+r.aboutToAppear+"  }\n",n,i)}function insertVisualCodeAfterPos(e,t,r,n){const i=n.substring(0,e.getStart()+1);var s,a,o=i.split("\n").length,u=t.split("\n").length-1,n=visualMap.get(o);visualMap.set(o,n?n+u:u);let l=e.getStart()+1;for([s,a]of slotMap)e.getStart()>=s&&(l+=a);r=r.substring(0,l)+t+r.substring(l);return slotMap.set(e.getStart(),t.length),r}function insertVisualCodeBeforePos(e,t,r,n){const i=n.substring(0,e.pos);var s,a,o=i.split("\n").length,u=t.split("\n").length-1,n=visualMap.get(o);visualMap.set(o,n?n+u:u);let l=e.pos;for([s,a]of slotMap)e.pos>=s&&(l+=a);r=r.substring(0,l)+t+r.substring(l);return slotMap.set(e.pos,t.length),r}function generateSourceMapForNewAndOriEtsFile(r,e){var t=this;if(process.env.cachePath){const o=new _sourceMap.SourceMapGenerator({file:r});var n=e.split("\n").length;for(let t=1;t<=n;t++){let e=t;for(var[i,s]of visualMap)t>i&&(e+=s);o.addMapping({generated:{line:e,column:0},source:r,original:{line:t,column:0}})}var a=_path.default.parse(r).name+_pre_define.SUPERVISUAL_SOURCEMAP_EXT;const u=_path.default.parse(r).dir;e=_path.default.parse(_main.projectConfig.projectPath).dir,e=_path.default.resolve(process.env.cachePath,_pre_define.SUPERVISUAL+u.replace(e,""));_fs.default.existsSync(e)&&_fs.default.statSync(e).isDirectory()||(0,_utils.mkDir)(e),_fs.default.writeFile(_path.default.resolve(e,a),o.toString(),function(e){if(_newArrowCheck(this,t),e)return console.error("ERROR: Failed to write visual.js.map")}.bind(this))}}function findVisualFile(e){return e.replace(_main.projectConfig.projectPath,_main.projectConfig.aceSuperVisualPath).replace(".ets",".visual")}function getVisualContent(e,t){e=(0,_codegen_ets.genETS)(_fs.default.readFileSync(e,"utf-8"));return e&&e.errorType&&""!==e.errorType&&t.push({type:_utils.LogType.ERROR,message:e.message}),e?e.ets:null}module.exports=preProcess;