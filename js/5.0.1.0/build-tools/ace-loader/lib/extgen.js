"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_loaderUtils=_interopRequireDefault(require("loader-utils")),codegen=require("./codegen/index.js");module.exports=function(e,r){this.cacheable&&this.cacheable();var s=this.async(),l=codegen.genHmlAndCss(e),t=_loaderUtils.default.getOptions(this)||{};if(l.errorType&&""!==l.errorType)s(l.errorType+" : "+l.errorMessage,"");else switch(t.type){case"template":s(null,l.hmlCss.hml,r);break;case"style":s(null,l.hmlCss.css,r);break;case"json":s(null,l.hmlCss.json,r)}};