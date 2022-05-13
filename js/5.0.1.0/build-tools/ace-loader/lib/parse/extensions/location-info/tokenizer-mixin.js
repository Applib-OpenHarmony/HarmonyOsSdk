"use strict";const Mixin=require("../../utils/mixin"),Tokenizer=require("../../tokenizer"),PositionTrackingPreprocessorMixin=require("../position-tracking/preprocessor-mixin");class LocationInfoTokenizerMixin extends Mixin{constructor(t){super(t),this.tokenizer=t,this.posTracker=Mixin.install(t.preprocessor,PositionTrackingPreprocessorMixin),this.currentAttrLocation=null,this.ctLoc=null}_getCurrentLocation(){return{startLine:this.posTracker.line,startCol:this.posTracker.col,startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1}}_attachCurrentAttrLocationInfo(){this.currentAttrLocation.endLine=this.posTracker.line,this.currentAttrLocation.endCol=this.posTracker.col,this.currentAttrLocation.endOffset=this.posTracker.offset;const t=this.tokenizer.currentToken,e=this.tokenizer.currentAttr;t.location.attrs||(t.location.attrs=Object.create(null)),t.location.attrs[e.name]=this.currentAttrLocation}_getOverriddenMethods(t,e){const r={_createStartTagToken(){e._createStartTagToken.call(this),this.currentToken.location=t.ctLoc},_createEndTagToken(){e._createEndTagToken.call(this),this.currentToken.location=t.ctLoc},_createCommentToken(){e._createCommentToken.call(this),this.currentToken.location=t.ctLoc},_createDoctypeToken(r){e._createDoctypeToken.call(this,r),this.currentToken.location=t.ctLoc},_createCharacterToken(r,n){e._createCharacterToken.call(this,r,n),this.currentCharacterToken.location=t.ctLoc},_createEOFToken(){e._createEOFToken.call(this),this.currentToken.location=t._getCurrentLocation()},_createAttr(r){e._createAttr.call(this,r),t.currentAttrLocation=t._getCurrentLocation()},_leaveAttrName(r){e._leaveAttrName.call(this,r),t._attachCurrentAttrLocationInfo()},_leaveAttrValue(r){e._leaveAttrValue.call(this,r),t._attachCurrentAttrLocationInfo()},_emitCurrentToken(){const r=this.currentToken.location;this.currentCharacterToken&&(this.currentCharacterToken.location.endLine=r.startLine,this.currentCharacterToken.location.endCol=r.startCol,this.currentCharacterToken.location.endOffset=r.startOffset),this.currentToken.type===Tokenizer.EOF_TOKEN?(r.endLine=r.startLine,r.endCol=r.startCol,r.endOffset=r.startOffset):(r.endLine=t.posTracker.line,r.endCol=t.posTracker.col+1,r.endOffset=t.posTracker.offset+1),e._emitCurrentToken.call(this)},_emitCurrentCharacterToken(){const r=this.currentCharacterToken&&this.currentCharacterToken.location;r&&-1===r.endOffset&&(r.endLine=t.posTracker.line,r.endCol=t.posTracker.col,r.endOffset=t.posTracker.offset),e._emitCurrentCharacterToken.call(this)}};return Object.keys(Tokenizer.MODE).forEach(n=>{const o=Tokenizer.MODE[n];r[o]=function(r){t.ctLoc=t._getCurrentLocation(),e[o].call(this,r)}}),r}}module.exports=LocationInfoTokenizerMixin;