"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_newArrowCheck2=_interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck")),_path=_interopRequireDefault(require("path")),_fs=_interopRequireDefault(require("fs")),_util=require("./util"),_parser=require("./parser");function loader(e){var t=this;this.cacheable&&this.cacheable();var s={sass:["sass-loader"],scss:["sass-loader"],less:["less-loader"]}||{},a=this.resourcePath,n=a.replace(_path.default.extname(a).toString(),""),r="//card_start\n";r+="var card_template ="+(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("template"),a);var i=findStyleFile(n);1==i.extStyle&&(r+="var card_style ="+(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("style",s[i.type]),i.styleFileName)),r=addJson(this,r,n,"");var l=(0,_parser.parseFragment)(e),o=new Set;return l.element&&l.element.forEach(function(e){var i;if((0,_newArrowCheck2.default)(this,t),e.src){e.src.match(/\.hml$/)||(e.src=e.src.concat(".hml"));var l=_path.default.join(a,"..",e.src);if(_fs.default.existsSync(l))if(i=e.name?e.name.toLowerCase():_path.default.parse(e.src).name.toLowerCase(),o.has(i))(0,_util.logWarn)(this,[{reason:"ERROR: The custom elements cannot have the same attribute 'name' or file name (case insensitive).",line:e.node.__location.line,column:e.node.__location.col}]);else{o.add(i);var c=l.replace(_path.default.extname(l).toString(),""),u=_path.default.basename(l).replace(_path.default.extname(l).toString(),"");r+="var card_element_template_".concat(u," =")+(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("template"),l+"?".concat(i,"#").concat(n));var _=findStyleFile(c);1==_.extStyle&&(r+="var card_element_style_".concat(u," =")+(0,_util.getRequireString)(this,(0,_util.jsonLoaders)("style",s[_.type]),_.styleFileName+"?".concat(i,"#").concat(n))),r=addJson(this,r,c,"?".concat(i,"#").concat(n),u)}else(0,_util.logWarn)(this,[{reason:"ERROR: The custom element '".concat(l,"' can not be found."),line:e.node.__location.line,column:e.node.__location.col}])}else(0,_util.logWarn)(this,[{reason:"ERROR: The attribute 'src' must be set in the custom element.",line:e.node.__location.line,column:e.node.__location.col}])}.bind(this)),r+="\n//card_end"}function findStyleFile(e){var t=!1,s=e+".css",a="css";return _fs.default.existsSync(s)?(t=!0,a="css"):(s=e+".less",_fs.default.existsSync(s)?(t=!0,a="less"):(s=e+".sass",_fs.default.existsSync(s)?(t=!0,a="sass"):(s=e+".scss",_fs.default.existsSync(s)?(t=!0,a="sass"):t=!1))),{extStyle:t,styleFileName:s,type:a}}function addJson(e,t,s,a,n){var r="".concat(n?"var card_element_json_"+n:"var card_json"," =");return _fs.default.existsSync(s+".json")&&!_fs.default.existsSync(s+".js")?t+=r+(0,_util.getRequireString)(e,(0,_util.jsonLoaders)("json"),s+".json"+a):_fs.default.existsSync(s+".js")&&!_fs.default.existsSync(s+".json")?((0,_util.logWarn)(e,[{reason:"WARNING: The JS file '".concat(s,".js' will be discarded in future version, ")+"use the JSON file '".concat(s,".json' instead.")}]),t+=r+(0,_util.getRequireString)(e,(0,_util.jsonLoaders)("json"),s+".js"+a)):_fs.default.existsSync(s+".json")&&_fs.default.existsSync(s+".js")&&((0,_util.logWarn)(e,[{reason:"WARNING: '".concat(s,"' cannot have the same name files '.json' and '.js', otherwise '.json' in default.")}]),t+=r+(0,_util.getRequireString)(e,(0,_util.jsonLoaders)("json"),s+".json"+a)),t}module.exports=loader;