"use strict";const defaultTreeAdapter=require("../tree-adapters/default"),mergeOptions=require("../utils/merge-options"),doctype=require("../common/doctype"),HTML=require("../common/html"),$=HTML.TAG_NAMES,NS=HTML.NAMESPACES,DEFAULT_OPTIONS={treeAdapter:defaultTreeAdapter},AMP_REGEX=/&/g,NBSP_REGEX=/\u00a0/g,DOUBLE_QUOTE_REGEX=/"/g,LT_REGEX=/</g,GT_REGEX=/>/g;class Serializer{constructor(e,t){this.options=mergeOptions(DEFAULT_OPTIONS,t),this.treeAdapter=this.options.treeAdapter,this.html="",this.startNode=e}serialize(){return this._serializeChildNodes(this.startNode),this.html}_serializeChildNodes(e){const t=this.treeAdapter.getChildNodes(e);if(t)for(let e=0,i=t.length;e<i;e++){const i=t[e];this.treeAdapter.isElementNode(i)?this._serializeElement(i):this.treeAdapter.isTextNode(i)?this._serializeTextNode(i):this.treeAdapter.isCommentNode(i)?this._serializeCommentNode(i):this.treeAdapter.isDocumentTypeNode(i)&&this._serializeDocumentTypeNode(i)}}_serializeElement(e){const t=this.treeAdapter.getTagName(e),i=this.treeAdapter.getNamespaceURI(e);if(this.html+="<"+t,this._serializeAttributes(e),this.html+=">",t!==$.AREA&&t!==$.BASE&&t!==$.BASEFONT&&t!==$.BGSOUND&&t!==$.BR&&t!==$.COL&&t!==$.EMBED&&t!==$.FRAME&&t!==$.HR&&t!==$.IMG&&t!==$.INPUT&&t!==$.KEYGEN&&t!==$.LINK&&t!==$.META&&t!==$.PARAM&&t!==$.SOURCE&&t!==$.TRACK&&t!==$.WBR){const s=t===$.TEMPLATE&&i===NS.HTML?this.treeAdapter.getTemplateContent(e):e;this._serializeChildNodes(s),this.html+="</"+t+">"}}_serializeAttributes(e){const t=this.treeAdapter.getAttrList(e);for(let e=0,i=t.length;e<i;e++){const i=t[e],s=Serializer.escapeString(i.value,!0);this.html+=" ",i.namespace?i.namespace===NS.XML?this.html+="xml:"+i.name:i.namespace===NS.XMLNS?("xmlns"!==i.name&&(this.html+="xmlns:"),this.html+=i.name):i.namespace===NS.XLINK?this.html+="xlink:"+i.name:this.html+=i.prefix+":"+i.name:this.html+=i.name,this.html+='="'+s+'"'}}_serializeTextNode(e){const t=this.treeAdapter.getTextNodeContent(e),i=this.treeAdapter.getParentNode(e);let s=void 0;i&&this.treeAdapter.isElementNode(i)&&(s=this.treeAdapter.getTagName(i)),s===$.STYLE||s===$.SCRIPT||s===$.XMP||s===$.IFRAME||s===$.NOEMBED||s===$.NOFRAMES||s===$.PLAINTEXT||s===$.NOSCRIPT?this.html+=t:this.html+=Serializer.escapeString(t,!1)}_serializeCommentNode(e){this.html+="\x3c!--"+this.treeAdapter.getCommentNodeContent(e)+"--\x3e"}_serializeDocumentTypeNode(e){const t=this.treeAdapter.getDocumentTypeNodeName(e);this.html+="<"+doctype.serializeContent(t,null,null)+">"}}Serializer.escapeString=function(e,t){return e=e.replace(AMP_REGEX,"&amp;").replace(NBSP_REGEX,"&nbsp;"),e=t?e.replace(DOUBLE_QUOTE_REGEX,"&quot;"):e.replace(LT_REGEX,"&lt;").replace(GT_REGEX,"&gt;")},module.exports=Serializer;