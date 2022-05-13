const bind=require("./bind"),styler=require("../styler"),styleValidator=require("../styler/lib/validator"),OHOS_THEME_PROP_GROUPS=require("../theme/ohosStyles"),path=require("path"),projectPath=process.env.aceModuleRoot||process.cwd(),transContent=require("./content"),REG_TAG_DATA_ATTR=/^data-\w+/,REG_EVENT=/([^(]*)\((.+)\)/,REG_DATA_BINDING=/{{{(.+?)}}}|{{(.+?)}}/,{DEVICE_LEVEL:DEVICE_LEVEL,PLATFORM:PLATFORM}=require("../../lib/lite/lite-enum"),{richCommonTag:richCommonTag,richNativeTag:richNativeTag}=require("./rich_component_map"),{liteCommonTag:liteCommonTag,liteNativeTag:liteNativeTag}=require("./lite_component_map"),{cardCommonTag:cardCommonTag,cardNativeTag:cardNativeTag}=require("./card_component_map"),card=process.env.DEVICE_LEVEL===DEVICE_LEVEL.CARD,nativeTag=process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE?liteNativeTag:card?cardNativeTag:richNativeTag,commonTag=process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE?liteCommonTag:card?cardCommonTag:richCommonTag,tagSelfClosing=[],tagWithoutRoot=[],tagWithoutChild=[],tagWithTextContent=[],tagWithAll=[],tagWithPath=[],aliasTagMap={},attrTagMap={},funcAttrTagMap={},defaultAttrTagMap={},requireAttrTagMap={},enumAttrTagMap={},rootAttrTagMap={},parentsTagMap={},childrenTagMap={},unSupportedChildren={},eventsTagMap={};let elementNames={};function validateTagName(e,t,a){const n=e.tagName,o=e.childNodes||[],i=e.sourceCodeLocation?{line:e.sourceCodeLocation.startLine,col:e.sourceCodeLocation.endLine}:{},s=t.deps,l=t.jsonTemplate,r=t.log,c=process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE?"ERROR":"WARNING";let u=e.__location||e.sourceCodeLocation?{line:e.sourceCodeLocation.startLine,col:e.sourceCodeLocation.endLine}:{};const p=elementNames[a]||[];tagWithAll.includes(n)||"img"===n||p.includes(n)||r.push({line:i.line||1,column:i.col||1,reason:c+": The `"+n+"` tag is not supported."}),process.env.DEVICE_LEVEL===DEVICE_LEVEL.RICH&&["dialog","popup","badge","list-item"].includes(n)&&checkOneChild(n,o,u,r),s[n]||"string"!=typeof n||s.push(n);const E=e.attrs||[],d=[];for(const e of E)d.push(e.name.toLowerCase());setDebugLine(l,a,i.line),validateAliasTagMap(n,l,i,r),validateTagWithoutRoot(e,n,d,i,r),validateName(n,o,i,r),validateForAttr(n,E,d,i,r),validatorLite(n,E,d,r,i)}function validateName(e,t,a,n){validateAtomicTag(e,t,a,n),validateTagWithAll(e,t,a,n)}function validateForAttr(e,t,a,n,o){validateAttrTagMap(e,a,n,o),validateDefaultAttrTagMap(e,t,a,n,o),validateRequireAttrTagMap(e,a,n,o),validateEnumAttrTagMap(e,a,t,n,o),validateFuncAttrTagMap(e,a,t,n,o),validateEventsTagMap(e,a,n,o)}function checkOneChild(e,t,a,n){t.filter(e=>e&&"#text"!==e.nodeName&&"#comment"!==e.nodeName).length>1&&n.push({line:a.line||1,column:a.col||1,reason:"ERROR: The `"+e+"` tag can have only one child node."})}function validateTagWithoutRoot(e,t,a,n,o){e._isroot&&(-1!==tagWithoutRoot.indexOf(t)&&o.push({line:n.line||1,column:n.col||1,reason:"ERROR: component `"+t+"` can not as root component."}),rootAttrTagMap[t]&&rootAttrTagMap.forEach(function(e){a[e]&&o.push({line:n.line||1,column:n.col||1,reason:"ERROR: root node `"+t+"` can not use attr `"+e+"`"})}))}function validateAliasTagMap(e,t,a,n){aliasTagMap[e]&&("img"!==e&&n.push({line:a.line||1,column:a.col||1,reason:"NOTE: tag name `"+e+"` is automatically changed to `"+aliasTagMap[e]+"`"}),e=aliasTagMap[e]),t.type=e}function validateAtomicTag(e,t,a,n){tagWithoutChild.indexOf(e)>=0&&t.length>0&&!isSupportedSelfClosing(e)&&(tagWithTextContent.indexOf(e)<0?t.every(function(t){return"#text"===t.nodeName||"#comment"===t.nodeName||n.push({line:a.Line||1,column:a.Col||1,reason:"ERROR: tag `"+e+"` should just have one text node only"})}):t.every(function(t){return"#text"===t.nodeName||"#comment"===t.nodeName||n.push({line:a.Line||1,column:a.Col||1,reason:"ERROR: tag `"+e+"` should not have children"})}))}function validateAttrTagMap(e,t,a,n){"img"===e&&(e="image"),attrTagMap[e]&&t.forEach(function(t){"stroke-width"===t?t="strokeWidth":"fill-opacity"===t?t="fillOpacity":"stroke-dasharray"===t?t="strokeDasharray":"stroke-dashoffset"===t?t="strokeDashoffset":"stroke-linecap"===t?t="strokeLinecap":"fill-rule"===t?t="fillRule":"stroke-linejoin"===t?t="strokeLinejoin":"stroke-miterlimit"===t?t="strokeMiterlimit":"font-size"===t?t="fontSize":"stroke-opacity"===t&&(t="strokeOpacity"),t.match(EVENT_START_REGEXP)||t in attrTagMap[e]||(t in commonTag.attrs?n.push({line:a.line||1,column:a.col||1,reason:"WARNING: tag `"+e+"` not support attr `"+t+"`"}):validateDataAttr(t)||n.push({line:a.line||1,column:a.col||1,reason:"WARNING: tag `"+e+"` use customize attr `"+t+"`"}))})}function validateDefaultAttrTagMap(e,t,a,n,o){defaultAttrTagMap[e]&&Object.keys(defaultAttrTagMap[e]).forEach(function(i){const s=a.indexOf(i);s>=0&&""===t[s].value&&(t[s].value=defaultAttrTagMap[e][i],"else"!==i&&o.push({line:n.line||1,column:n.col||1,reason:"WARNING: tag `"+e+"` attr `"+i+"`is null"}))})}function validateRequireAttrTagMap(e,t,a,n){requireAttrTagMap[e]&&requireAttrTagMap[e].forEach(function(o){t.indexOf(o)<0&&n.push({line:a.line||1,column:a.col||1,reason:"ERROR: tag `"+e+"` not define attr `"+o+"`"})})}function validateEnumAttrTagMap(e,t,a,n,o){enumAttrTagMap[e]&&Object.keys(enumAttrTagMap[e]).forEach(function(i){const s=t.indexOf(i);if(s>=0){const t=a[s].value.trim();if(!REG_DATA_BINDING.test(t)){const l=enumAttrTagMap[e][i];l.indexOf(t)<0&&(a[s].value=l[0],o.push({line:n.line||1,column:n.col||1,reason:"ERROR: tag `"+e+"` attr `"+i+"` value `"+t+"` is illegal"}))}}})}function validateFuncAttrTagMap(e,t,a,n,o){funcAttrTagMap[e]&&Object.keys(funcAttrTagMap[e]).forEach(function(i){const s=t.indexOf(i);if(s>=0){const t=a[s].value;if(!REG_DATA_BINDING.test(t)){const l=funcAttrTagMap[e][i],r=styleValidator.validateFuncMap[l];if("function"==typeof r){const e=r(t);if(e&&e.reason){a[s].value=e.value;const l=e.reason(i,t,e.value);o.push({line:n.line||1,column:n.col||1,reason:l})}}}}})}function validateEventsTagMap(e,t,a,n){if(eventsTagMap[e]){const o=eventsTagMap[e];t.forEach(function(t){if(t.match(EVENT_START_REGEXP)){const i=t.replace(EVENT_START_REGEXP,""),s=i.match(TOUCH_CAPTURE_EVENT_REGEXP)&&process.env.DEVICE_LEVEL===DEVICE_LEVEL.RICH&&process.env.PLATFORM_VERSION===PLATFORM.VERSION6?i:i.replace(EVENT_END_REGEXP,"");o.indexOf(s.toLowerCase())<0&&n.push({line:a.line||1,column:a.col||1,reason:"WARNING: tag `"+e+"` not support event `"+s+"`"})}})}}function validateTagWithAll(e,t,a,n){if(tagWithAll.indexOf(e)>=0&&t.length>0){const o=childrenTagMap[e],i=unSupportedChildren[e],s="tabs"===e;let l=void 0,r=void 0;s&&(r=0,l=0),t.forEach(function(t){if(tagWithAll.indexOf(t.nodeName)>=0){const c=parentsTagMap[t.nodeNames];if((c&&c.indexOf(e)<0||o&&o.indexOf(t.nodeName)<0||i&&i.indexOf(t.nodeName)>=0)&&(n.push({line:a.line||1,column:a.col||1,reason:"ERROR: tag `"+e+"` not support child tag `"+t.nodeName+"`"}),s)){let e=0;"tab-content"===t.nodeName&&(e=++l),"tab-bar"===t.nodeName&&(e=++r),e>1&&n.push({line:a.line||1,column:a.col||1,reason:"ERROR: tag  `tabs` child tag `"+t.nodeName+"` support at most one"})}}})}}function validatorLite(e,t,a,n,o){process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE&&(inputLite(e,t,a,n,o),ismatchIfAndFor(a)&&n.push({line:o.line||1,column:o.col||1,reason:"ERROR: in tag `"+e+"` not support writing `if` and `for` in the same component"}),classLite(e,t,n,o))}function inputLite(e,t,a,n,o){let i;"input"===e&&(t.map(function(e){"type"===e.name&&(i=e.value)}),isMatchChange(i,a)&&n.push({line:o.line||1,column:o.col||1,reason:"ERROR: tag `"+e+"` not support event `change` when the type is not checkbox and radio"}))}function isMatchChange(e,t){return!["checkbox","radio"].includes(e)&&(t.includes("onchange")||t.includes("@change"))}function ismatchIfAndFor(e){return e.includes("if")&&e.includes("for")}function classLite(e,t,a,n){t.map(function(t){"class"===t.name&&bind.containExp(t.value)&&a.push({line:n.line||1,column:n.col||1,reason:"ERROR: in tag `"+e+"` class selector does not support data binding."})})}function validateClass(classNames,out,nodeLoc,relativePath){classNames=classNames.trim(),setDebugLine(out.jsonTemplate,relativePath,nodeLoc.line,classNames),bind.containExp(classNames)?out.jsonTemplate.classList=eval(bind.transExpForList(classNames)):out.jsonTemplate.classList=classNames.split(/\s+/)}function preprocessSystemResourceReference(e,t){if(2!==e.length)return!1;const a=e[0].trim().replace(/-([a-z])/g,function(e,t){return t.toUpperCase()});let n,o=e[1].trim();if(n=/{{\s*\$r\s*\(\s*(['"]ohos\.(?<resName>\w+)['"])\s*\)\s*}}/.exec(o)){const e=n.groups.resName;if(e&&OHOS_THEME_PROP_GROUPS[e])return t[a]="@ohos_id_"+OHOS_THEME_PROP_GROUPS[e],!0}if(n=/{{\s*\$r\s*\(\s*(['"]sys\.(?<resType>\w+)\.(?<resName>\w+)['"])\s*\)\s*}}/.exec(o)){const e=n.groups.resName,o=n.groups.resType;if(e&&o&&OHOS_THEME_PROP_GROUPS[e])return t[a]="@sys."+o+"."+OHOS_THEME_PROP_GROUPS[e],!0}if(n=/{{\s*\$r\s*\(\s*(['"]app\.(?<resType>\w+)\.(?<resName>\w+)['"])\s*\)\s*}}/.exec(o)){const e=n.groups.resName,o=n.groups.resType;if(e&&o)return t[a]="@app."+o+"."+e,!0}return!1}function validateItem(e,t,a,n){const o=styler.validateItem(e,t);return o.log&&n.push({line:a.line||1,column:a.col||1,reason:o.log.reason}),o}function validateStyle(e,t,a,n){const o=t.log;if(e){const i={};processCssArray(e,t,a,i,e.split(";"),o),t.jsonTemplate.style=i,setDebugLine(t.jsonTemplate,n,a.line)}else o.push({line:a.line||1,column:a.col||1,reason:"WARNING: style attr is null"})}function processCssArray(e,t,a,n,o,i){for(let s=0;s<o.length;s++){let l=o[s].trim().split(":");if(!preprocessSystemResourceReference(l,n)){if(2===l.length){const o=l[0].trim().replace(/-([a-z])/g,function(e,t){return t.toUpperCase()});let s=bind(l[1].trim(),void 0,!0,t,a);const r=l[1].trim().toString();if(r.match(/^linear-gradient/)&&r.match(/\(.*\{\{.*\}\}.*\)/)&&i.push({line:a.line||1,column:a.col||1,reason:`ERROR: can not bind data for linear-gradient in inline style at ${e}`}),"flex"===o&&"string"==typeof s)expandFlex(o,s,n,a,i);else{const e=validateItem(o,s,a,i);s=e.value,["[object Number]","[object String]","[object Function]","[object Object]","[object Array]"].includes(Object.prototype.toString.call(s))&&expandStyle(o,s,e,n,t,a,i)}}if(l.length>2)if(l[1]=l.slice(1).join(":"),l=l.slice(0,2),REG_DATA_BINDING.test(l[1]))l[0]=l[0].trim().replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}),n[l[0]]=bind(l[1],void 0,!0,t,a);else{const e=l[0].trim().replace(/-([a-z])/g,function(e,t){return t.toUpperCase()});if("backgroundImage"===e){const t=validateItem(e,l[1].trim(),a,i);n[e]=t.value}}}}}function expandFlex(e,t,a,n,o){const i=t.split(/\s+/);1===i.length?expandFlexOne(e,i,a,n,o):2===i.length?expandFlexTwo(e,t,i,a,n,o):3===i.length?expandFlexThree(e,t,i,a,n,o):o.push({line:n.line,column:n.column,reason:"ERROR: Value `"+t+"` of the `"+e+"` attribute is incorrect."})}function expandFlexOne(e,t,a,n,o){["none","auto","initial"].includes(t[0])?a.flex=t[0]:"px"===styler.getUnit(t[0])?a.flexBasis=t[0]:"none"===styler.getUnit(t[0])?a.flexGrow=t[0]:o.push({line:n.line,column:n.column,reason:"ERROR: Value `"+t[0]+"` of the `"+e+"` attribute is incorrect.It must be a number, a number with unit `px`, none, auto, or initial."})}function expandFlexTwo(e,t,a,n,o,i){"none"===styler.getUnit(a[0])?(n.flexGrow=a[0],"px"===styler.getUnit(a[1])?n.flexBasis=a[1]:"none"===styler.getUnit(a[1])?n.flexShrink=a[1]:i.push({line:o.line,column:o.column,reason:"ERROR: Value `"+t+"` of the `"+e+"` attribute is incorrect. Value `"+a[1]+"` must be a number or a number with unit `px`."})):i.push({line:o.line,column:o.column,reason:"ERROR: Value `"+t+"` of the `"+e+"` attribute is incorrect. Value `"+a[0]+"` must be a number."})}function expandFlexThree(e,t,a,n,o,i){"none"===styler.getUnit(a[0])&&"none"===styler.getUnit(a[1])&&"px"===styler.getUnit(a[2])?(n.flexGrow=a[0],n.flexShrink=a[1],n.flexBasis=a[2]):i.push({line:o.line,column:o.column,reason:"ERROR: Value `"+t+"` of the `"+e+"` attribute is incorrect. It must be in the format of (1, 1, 1px)."})}function expandStyle(e,t,a,n,o,i,s){Object.values(styler.util.SPLECIAL_ATTR).includes(e)&&"function"!=typeof t?styler.expand(a,e,n):process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE&&"border"===e&&"function"==typeof t?s.push({line:i.line||1,column:i.col||1,reason:"ERROR: "+e+" shorthand inline style does not support data binding."}):process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE&&"list"===o.jsonTemplate.type&&"flexDirection"==e&&"function"==typeof t?s.push({line:i.line||1,column:i.col||1,reason:"ERROR: `list` tag `flex-direction` inline style does not support data binding."}):n[e]=t}function validateIf(e,t,a,n,o){if(!REG_DATA_BINDING.test(e))if("false"===e.trim())e=!card&&"{{false}}";else if("true"===e.trim())e=!!card||"{{true}}";else{t.log.push({line:n.line||1,column:n.col||1,reason:"ERROR: if value cannot be "+e+". The default value is true or false."})}if(a){const t=e.replace("{{","").replace("}}","");e=card?REG_DATA_BINDING.test(e)?"!{{"+t+"}}":"!"+t:"{{!("+t+")}}"}const i=bind(e,void 0,!1,t,n),s=card&&a&&/\$f/.test(i)?i.substr(3,i.length-4):i;t.jsonTemplate.shown=s,setDebugLine(t.jsonTemplate,o,n.line)}function validateElif(e,t,a,n,o){if(REG_DATA_BINDING.test(e)||(e=card?e:"{{"+e+"}}"),e){if(a){const t=e.indexOf("&&");e=(card?REG_DATA_BINDING.test(e)?"!{{"+e.substr(2,t-2):"!"+e.substr(0,t):"{{!("+e.substr(2,t-2)+")")+e.substr(t,e.length)}const i=bind(e,void 0,!1,t,n);t.jsonTemplate.shown=card&&/\$f/.test(i)?i.substr(3,i.length-4):i,setDebugLine(t.jsonTemplate,o,n.line)}}function validateFor(e,t,a,n){const o=t.log;if(e){let o;e.startsWith("{{")&&e.endsWith("}}")&&(e=e.substr(2,e.length-4));const i=e.match(/(?<=in\s)(.*)/),s=e.match(/(.*)(?=\s+in\s+)/);if(i&&s){const e=s[0].match(/\((.*),(.*)\)/);o={exp:bind("{{"+i[0].trim()+"}}",void 0,!1,t,a)},e?(o.key=e[1].trim(),o.value=e[2].trim()):o.value=s[0].trim()}else o=bind("{{"+e+"}}",void 0,!1,t,a);t.jsonTemplate.repeat=o,setDebugLine(t.jsonTemplate,n,a.line)}else o.push({line:a.line||1,column:a.col||1,reason:"WARNING: for attr is null"})}function validateId(e,t,a,n){e&&(t.jsonTemplate.id=REG_DATA_BINDING.test(e)?bind(e,void 0,!0,t,a):e,setDebugLine(t.jsonTemplate,n,a.line),card||(t.jsonTemplate.attr=t.jsonTemplate.attr||{},t.jsonTemplate.attr[styler.util.hyphenedToCamelCase("id")]=bind(e,void 0,!0,t,a)))}function validateAppend(e,t,a,n){e&&(t.jsonTemplate.append=bind(e,void 0,!0,t,a),setDebugLine(t.jsonTemplate,n,a.line))}!function(){for(const e of Object.keys(nativeTag)){if(nativeTag[e].selfClosing&&tagSelfClosing.push(e),nativeTag[e].excludeRoot&&tagWithoutRoot.push(e),nativeTag[e].atomic&&tagWithoutChild.push(e),nativeTag[e].textContent&&tagWithTextContent.push(e),tagWithAll.push(e),nativeTag[e].alias&&nativeTag[e].alias.length)for(const t of nativeTag[e].alias)aliasTagMap[t]=e;const t={};nativeTag[e].uattrs?Object.assign(t,nativeTag[e].uattrs,{}):Object.assign(t,nativeTag[e].attrs,commonTag.attrs),attrTagMap[e]=t;const a={},n={},o=[],i={},s=[];for(const e of Object.keys(t))t[e].checkFunc&&(a[e]=t[e].checkFunc),t[e].def&&(n[e]=t[e].def),t[e].required&&o.push(e),t[e].enum&&t[e].enum.length>0&&(i[e]=t[e].enum,n[e]=t[e].enum[0]),t[e].excludeRoot&&s.push(e),t[e].checkPath&&tagWithPath.push(e);funcAttrTagMap[e]=a,defaultAttrTagMap[e]=n,requireAttrTagMap[e]=o,enumAttrTagMap[e]=i,rootAttrTagMap[e]=s,nativeTag[e].parents&&(parentsTagMap[e]=nativeTag[e].parents.concat(commonTag.parents)),nativeTag[e].children&&(childrenTagMap[e]=nativeTag[e].children.concat(commonTag.children)),nativeTag[e].unSupportedChildren&&(unSupportedChildren[e]=nativeTag[e].unSupportedChildren.concat(commonTag.unSupportedChildren)),nativeTag[e].uevents?eventsTagMap[e]=nativeTag[e].uevents.concat(nativeTag[e].events):eventsTagMap[e]=[].concat(commonTag.events).concat(nativeTag[e].events)}}();const EVENT_START_REGEXP=/^(on:|on|@|grab:)/,EVENT_END_REGEXP=/(\.bubble|\.capture)$/,START_CATCH_REGEXP=/^(grab:)/,END_CAPTURE_REGEXP=/(\.capture)$/,TOUCH_EVENT_REGEXP=/^(touch)/,CLICK_EVENT_REGEXP=/^(click)$/,TOUCH_CAPTURE_EVENT_REGEXP=/^(?!touch).*?(\.capture)$/;function validateEvent(eventName,val,out,pos,relativePath){const tempName=eventName.replace(EVENT_START_REGEXP,""),name=tempName.match(TOUCH_CAPTURE_EVENT_REGEXP)&&process.env.PLATFORM_VERSION===PLATFORM.VERSION6&&process.env.DEVICE_LEVEL===DEVICE_LEVEL.RICH?tempName:tempName.replace(EVENT_END_REGEXP,"");if(name&&val){if(card&&val.match(/(.*)\((.*)\)/))return void out.log.push({line:pos.line||1,column:pos.col||1,reason:"ERROR: The event `"+val+"` does not support."});REG_DATA_BINDING.test(val)&&(val=bind.removeAllExpFix(val.trim()));const empty=val.match(/(.*)\(\)$/);if(empty)val=empty[1];else{const content=val.match(REG_EVENT);if(content){const functionName=content[1];let paramList=content[2];paramList&&(paramList=transContent.parseExpression(paramList,!0),val=eval("(function (evt) {"+bind("{{"+functionName+"("+paramList+",evt)}}",!1,!0,out,pos)+"})"))}}distributeEvent(out,eventName,name,val),setDebugLine(out.jsonTemplate,relativePath,pos.line)}}function distributeEvent(e,t,a,n){process.env.DEVICE_LEVEL!==DEVICE_LEVEL.LITE&&!TOUCH_EVENT_REGEXP.test(a)||process.env.PLATFORM_VERSION===PLATFORM.VERSION3?process.env.DEVICE_LEVEL===DEVICE_LEVEL.RICH&&CLICK_EVENT_REGEXP.test(a)&&!t.match(END_CAPTURE_REGEXP)&&process.env.PLATFORM_VERSION===PLATFORM.VERSION6?t.match(START_CATCH_REGEXP)?(e.jsonTemplate.catchBubbleEvents=e.jsonTemplate.catchBubbleEvents||{},e.jsonTemplate.catchBubbleEvents[a]=n):(e.jsonTemplate.onBubbleEvents=e.jsonTemplate.onBubbleEvents||{},e.jsonTemplate.onBubbleEvents[a]=n):(e.jsonTemplate.events=e.jsonTemplate.events||{},e.jsonTemplate.events[a]=n):t.match(START_CATCH_REGEXP)?t.match(END_CAPTURE_REGEXP)?(e.jsonTemplate.catchCaptureEvents=e.jsonTemplate.catchCaptureEvents||{},e.jsonTemplate.catchCaptureEvents[a]=n):(e.jsonTemplate.catchBubbleEvents=e.jsonTemplate.catchBubbleEvents||{},e.jsonTemplate.catchBubbleEvents[a]=n):t.match(END_CAPTURE_REGEXP)?(e.jsonTemplate.onCaptureEvents=e.jsonTemplate.onCaptureEvents||{},e.jsonTemplate.onCaptureEvents[a]=n):(e.jsonTemplate.onBubbleEvents=e.jsonTemplate.onBubbleEvents||{},e.jsonTemplate.onBubbleEvents[a]=n)}const transArray=[/\\a/g,/\\b/g,/\\f/g,/\\n/g,/\\r/g,/\\t/g,/\\v/g,/\\\\/g,/\\'/g,/\\"/g,/\\0/g],transReplaceArray=["a","\b","\f","\n","\r","\t","\v","\\","'",'"',"\0"];function validateAttr(e,t,a,n,o,i,s){if(card&&"tid"===t&&bind.isExp(a)&&n.log.push({line:i.line,column:i.col,reason:"ERROR: The 'tid' does not support the expression."}),"value"===t&&transArray.forEach((e,t)=>{a=a.replace(e,transReplaceArray[t])}),t&&("string"==typeof a||"number"==typeof a)&&a){let l;if("value"===t&&"text"===o&&n.log.push({line:i.line,column:i.col,reason:"WARNING: `value` content could be written between <text> and </text>"}),getAttrValue(l=/{{\s*\$r\s*\(\s*(['"]sys\.media\.(?<resName>\w+)['"])\s*\)\s*}}/.exec(a),a,!0),getAttrValue(l=/{{\s*\$r\s*\(\s*(['"]app\.media\.(?<resName>\w+)['"])\s*\)\s*}}/.exec(a),a,!1),tagWithPath.indexOf(t)>=0&&a.match(/^\.\.\/|^\.\//)){if(!e)return;a.indexOf("./")>=0&&(e=e.substring(0,e.lastIndexOf(path.sep)+1),a=path.resolve(e,a)),a=a.replace(projectPath,"").replace(/\\/g,"/")}n.jsonTemplate.attr=n.jsonTemplate.attr||{},n.jsonTemplate.attr[t.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})]=bind(a,void 0,!0,n,i),setDebugLine(n.jsonTemplate,s,i.line)}}function getAttrValue(e,t,a){if(e&&a){const t=e.groups.resName;t&&OHOS_THEME_PROP_GROUPS[t]&&"@sys.media."+OHOS_THEME_PROP_GROUPS[t]}else if(e&&!a){const t=e.groups.resName;t&&"@app.media."+t}}function validateAttrElif(e,t,a,n,o,i,s){if(e&&e.attrs)for(let a=0;a<e.attrs.length;a++){const n=e.attrs[a],l=t.replace("{{","").replace("}}","");if("if"===n.name){const e=n.value.replace("{{","").replace("}}","");validateElif(t=card?REG_DATA_BINDING.test(t)?"{{"+l+"}}&&!{{"+e+"}}":l+" && !"+e:"{{"+l+"&&!("+e+")}}",o,!1,i,s)}if("elif"===n.name){const e=n.value.indexOf("&&"),a=n.value.substr(0,e).replace("{{",""),r=n.value.substr(e,n.value.length);validateElif(t=card?REG_DATA_BINDING.test(t)?"{{"+l+"}}&&!{{"+a+r:l+" && !"+a+r:"{{"+l+"&&!("+a+")"+r,o,!1,i,s)}}a[n].value=t}function validateAttrElse(e,t,a,n){if(e&&e.attrs)for(let o=0;o<e.attrs.length;o++){const i=e.attrs[o];"if"===i.name&&validateIf(i.value,t,!0,a,n),"elif"===i.name&&validateElif(i.value,t,!0,a,n)}}function parseDataAttr(e,t,a){const n=e.replace("data-","");a.jsonTemplate.attr=a.jsonTemplate.attr||{},a.jsonTemplate.attr.$data=a.jsonTemplate.attr.$data||{},a.jsonTemplate.attr.$data[n]=bind(t,void 0,!0,a)}function isSupportedSelfClosing(e){if(e&&"string"==typeof e){const t=aliasTagMap[e];if(t){if(nativeTag[t]&&-1!==tagSelfClosing.indexOf(t))return!0}else if(nativeTag[e]&&-1!==tagSelfClosing.indexOf(e))return!0}return!1}function validateDataAttr(e){return REG_TAG_DATA_ATTR.test(e)}function isReservedTag(e){return-1!==tagWithAll.indexOf(e)}function setDebugLine(e,t,a,n){e.attr=e.attr||{},process.env.DEVICE_LEVEL===DEVICE_LEVEL.RICH&&"debug"===process.env.buildMode&&(e.attr.debugLine=t+":"+a,n&&(e.attr.className=n))}module.exports={validateTagName:validateTagName,validateId:validateId,validateClass:validateClass,validateStyle:validateStyle,validateIf:validateIf,validateElif:validateElif,validateFor:validateFor,validateAppend:validateAppend,validateEvent:validateEvent,validateAttr:validateAttr,validateAttrElse:validateAttrElse,validateAttrElif:validateAttrElif,parseDataAttr:parseDataAttr,isReservedTag:isReservedTag,isSupportedSelfClosing:isSupportedSelfClosing,elementNames:elementNames};