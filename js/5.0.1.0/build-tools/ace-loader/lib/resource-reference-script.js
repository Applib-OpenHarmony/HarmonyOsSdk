"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof"),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_setPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/setPrototypeOf"));function _wrapRegExp(){_wrapRegExp=function(e,r){return new t(e,void 0,r)};var e=RegExp.prototype,r=new WeakMap;function t(e,s,p){var a=new RegExp(e,s);return r.set(a,p||r.get(e)),(0,_setPrototypeOf2.default)(a,t.prototype)}function s(e,t){var s=r.get(t);return Object.keys(s).reduce(function(r,t){return r[t]=e[s[t]],r},Object.create(null))}return(0,_inherits2.default)(t,RegExp),t.prototype.exec=function(r){var t=e.exec.call(this,r);return t&&(t.groups=s(t,this)),t},t.prototype[Symbol.replace]=function(t,p){if("string"==typeof p){var a=r.get(this);return e[Symbol.replace].call(this,t,p.replace(/\$<([^>]+)>/g,function(e,r){return"$"+a[r]}))}if("function"==typeof p){var n=this;return e[Symbol.replace].call(this,t,function(){var e=arguments;return"object"!=_typeof(e[e.length-1])&&(e=[].slice.call(e)).push(s(e,n)),p.apply(this,e)})}return e[Symbol.replace].call(this,t,p)},_wrapRegExp.apply(this,arguments)}var OHOS_THEME_PROP_GROUPS=require("./theme/ohosStyles");module.exports=function(e){for(var r,t=_wrapRegExp(/"?this\s*\.\$r\s*\(\s*((['"]ohos\.(\w+)['"]))\s*\)"?/g,{resName:3});r=t.exec(e);){var s=r.groups.resName;if(s&&OHOS_THEME_PROP_GROUPS[s]){var p='"@ohos_id_'+OHOS_THEME_PROP_GROUPS[s]+'"';e=e.replace(r[0],p),t.lastIndex-=r[0].length-p.length}}for(var a=_wrapRegExp(/"?this\s*\.\$r\s*\(\s*((['"]sys\.(\w+)\.(\w+)['"]))\s*\)"?/g,{resType:3,resName:4});r=a.exec(e);){var n=r.groups.resName,o=r.groups.resType;if(n&&o&&OHOS_THEME_PROP_GROUPS[n]){var i='"@sys.'+o+"."+OHOS_THEME_PROP_GROUPS[n]+'"';e=e.replace(r[0],i),a.lastIndex-=r[0].length-i.length}}for(var l=_wrapRegExp(/"?this\s*\.\$r\s*\(\s*((['"]app\.(\w+)\.(\w+)['"]))\s*\)"?/g,{resType:3,resName:4});r=l.exec(e);){var u=r.groups.resName,c=r.groups.resType;if(u&&c){var f='"@app.'+c+"."+u+'"';e=e.replace(r[0],f),l.lastIndex-=r[0].length-f.length}}return e};