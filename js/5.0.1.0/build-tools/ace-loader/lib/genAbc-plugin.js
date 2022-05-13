"use strict";var output,arkDir,nodeJs,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_newArrowCheck2=_interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),fs=require("fs"),path=require("path"),process=require("child_process"),forward='(global.___mainEntry___ = function (globalObjects) {\n  var define = globalObjects.define;\n  var require = globalObjects.require;\n  var bootstrap = globalObjects.bootstrap;\n  var register = globalObjects.register;\n  var render = globalObjects.render;\n  var $app_define$ = globalObjects.$app_define$;\n  var $app_bootstrap$ = globalObjects.$app_bootstrap$;\n  var $app_require$ = globalObjects.$app_require$;\n  var history = globalObjects.history;\n  var Image = globalObjects.Image;\n  var OffscreenCanvas = globalObjects.OffscreenCanvas;\n  (function(global) {\n    "use strict";\n',last="\n})(this.__appProto__);\n})",firstFileEXT="_.js",isWin=!1,isMac=!1,isDebug=!1,GenAbcPlugin=function(){function e(r,s,a,i){(0,_classCallCheck2.default)(this,e),output=r,arkDir=s,nodeJs=a,isDebug=i}return(0,_createClass2.default)(e,[{key:"apply",value:function(e){var r=this;if(fs.existsSync(path.resolve(arkDir,"build-win")))isWin=!0;else if(fs.existsSync(path.resolve(arkDir,"build-mac")))isMac=!0;else if(!fs.existsSync(path.resolve(arkDir,"build")))return;e.hooks.emit.tap("GenAbcPlugin",function(e){var s=this;(0,_newArrowCheck2.default)(this,r);var a=e.assets;Object.keys(a).forEach(function(e){if((0,_newArrowCheck2.default)(this,s),output&&".js"===path.extname(e)){var r=a[e].source();0!==e.search("./workers/")&&"commons.js"!==e&&"vendors.js"!==e&&(r=forward+r+last),"commons.js"!==e&&"vendors.js"!==e||(r="\n\n\n\n\n\n\n\n\n\n\n\n\n\n"+r);var i=e.replace(/\.js$/,firstFileEXT);writeFileSync(r,path.resolve(output,i),e)}}.bind(this))}.bind(this))}}]),e}();function writeFileSync(e,r,s){var a=path.join(r,"..");fs.existsSync(a)&&fs.statSync(a).isDirectory()||mkDir(a),fs.writeFileSync(r,e),fs.existsSync(r)&&js2abcFirst(r)}function mkDir(e){var r=path.join(e,"..");fs.existsSync(r)&&!fs.statSync(r).isFile()||mkDir(r),fs.mkdirSync(e)}function js2abcFirst(e){var r="";isDebug&&(r+="--debug");var s=path.join(arkDir,"build","src","index.js");isWin?s=path.join(arkDir,"build-win","src","index.js"):isMac&&(s=path.join(arkDir,"build-mac","src","index.js"));var a="".concat(nodeJs,' --expose-gc "').concat(s,'" "').concat(e,'" ').concat(r);process.execSync(a),fs.existsSync(e)&&fs.unlinkSync(e);var i=e.replace(/\.js$/,".abc");if(fs.existsSync(i)){var n=i.replace(/\_.abc$/,".abc");fs.renameSync(i,n)}}module.exports=GenAbcPlugin;