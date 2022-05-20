"use strict";function _newArrowCheck(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,N=new Array(r);t<r;t++)N[t]=e[t];return N}Object.defineProperty(exports,"__esModule",{value:!0}),exports.forbiddenUseStateType=exports.STYLES_ATTRIBUTE=exports.SPECIFIC_CHILD_COMPONENT=exports.SINGLE_CHILD_COMPONENT=exports.NO_DEBUG_LINE_COMPONENT=exports.NEEDPOP_COMPONENT=exports.JS_BIND_COMPONENTS=exports.INNER_STYLE_FUNCTION=exports.INNER_COMPONENT_NAMES=exports.GLOBAL_STYLE_FUNCTION=exports.GESTURE_TYPE_NAMES=exports.GESTURE_ATTRS=exports.EXTEND_ATTRIBUTE=exports.CUSTOM_BUILDER_METHOD=exports.COMPONENT_MAP=exports.COMMON_ATTRS=exports.BUILDIN_STYLE_NAMES=exports.BUILDIN_CONTAINER_COMPONENT=exports.AUTOMIC_COMPONENT=void 0;var fs=require("fs"),path=require("path"),COMPONENT_MAP={};exports.COMPONENT_MAP=COMPONENT_MAP;var COMMON_ATTRS=new Set([]);exports.COMMON_ATTRS=COMMON_ATTRS,function(){var t=path.join(__dirname,"../components");fs.readdirSync(t).forEach(function(e){var r=path.join(t,e),e=require(r);fs.statSync(r).isFile()&&(e.name?(r=e.name,delete e.name,COMPONENT_MAP[r]=e):exports.COMMON_ATTRS=COMMON_ATTRS=new Set(e.attrs))})}();var TRANSITION_COMMON_ATTRS=new Set(["slide","translate","scale","opacity"]),GESTURE_ATTRS=new Set(["gesture","parallelGesture","priorityGesture"]);exports.GESTURE_ATTRS=GESTURE_ATTRS;var forbiddenUseStateType=new Set(["Scroller","SwiperScroller","VideoController","WebController","CustomDialogController","SwiperController","TabsController","CalendarController","AbilityController","CanvasRenderingContext2D","CanvasGradient","ImageBitmap","ImageData","Path2D","RenderingContextSettings","OffscreenCanvasRenderingContext2D"]);exports.forbiddenUseStateType=forbiddenUseStateType;var INNER_COMPONENT_NAMES=new Set;exports.INNER_COMPONENT_NAMES=INNER_COMPONENT_NAMES;var NO_DEBUG_LINE_COMPONENT=new Set;exports.NO_DEBUG_LINE_COMPONENT=NO_DEBUG_LINE_COMPONENT;var BUILDIN_CONTAINER_COMPONENT=new Set;exports.BUILDIN_CONTAINER_COMPONENT=BUILDIN_CONTAINER_COMPONENT;var BUILDIN_STYLE_NAMES=new Set([].concat(_toConsumableArray(COMMON_ATTRS),_toConsumableArray(GESTURE_ATTRS),_toConsumableArray(TRANSITION_COMMON_ATTRS)));exports.BUILDIN_STYLE_NAMES=BUILDIN_STYLE_NAMES;var AUTOMIC_COMPONENT=new Set;exports.AUTOMIC_COMPONENT=AUTOMIC_COMPONENT;var SINGLE_CHILD_COMPONENT=new Set;exports.SINGLE_CHILD_COMPONENT=SINGLE_CHILD_COMPONENT;var SPECIFIC_CHILD_COMPONENT=new Map;exports.SPECIFIC_CHILD_COMPONENT=SPECIFIC_CHILD_COMPONENT;var GESTURE_TYPE_NAMES=new Set(["TapGesture","LongPressGesture","PanGesture","PinchGesture","RotationGesture","GestureGroup","SwipeGesture"]);exports.GESTURE_TYPE_NAMES=GESTURE_TYPE_NAMES;var CUSTOM_BUILDER_METHOD=new Set;exports.CUSTOM_BUILDER_METHOD=CUSTOM_BUILDER_METHOD;var INNER_STYLE_FUNCTION=new Map;exports.INNER_STYLE_FUNCTION=INNER_STYLE_FUNCTION;var GLOBAL_STYLE_FUNCTION=new Map;exports.GLOBAL_STYLE_FUNCTION=GLOBAL_STYLE_FUNCTION;var EXTEND_ATTRIBUTE=new Map;exports.EXTEND_ATTRIBUTE=EXTEND_ATTRIBUTE;var STYLES_ATTRIBUTE=new Set;exports.STYLES_ATTRIBUTE=STYLES_ATTRIBUTE;var JS_BIND_COMPONENTS=new Set([].concat(_toConsumableArray(GESTURE_TYPE_NAMES),["Gesture","PanGestureOption","CustomDialogController","Storage","Scroller","SwiperController","TabsController","CalendarController","AbilityController","VideoController","WebController","CanvasRenderingContext2D","CanvasGradient","ImageBitmap","ImageData","Path2D","RenderingContextSettings","OffscreenCanvasRenderingContext2D","AlertDialog","ActionSheet"]));exports.JS_BIND_COMPONENTS=JS_BIND_COMPONENTS;var NEEDPOP_COMPONENT=new Set(["Blank","Search"]);exports.NEEDPOP_COMPONENT=NEEDPOP_COMPONENT,function(){var t=this;Object.keys(COMPONENT_MAP).forEach(function(e){var r=this;_newArrowCheck(this,t),INNER_COMPONENT_NAMES.add(e),JS_BIND_COMPONENTS.add(e),(COMPONENT_MAP[e].atomic?AUTOMIC_COMPONENT:BUILDIN_CONTAINER_COMPONENT).add(e),COMPONENT_MAP[e].single&&SINGLE_CHILD_COMPONENT.add(e),COMPONENT_MAP[e].children&&SPECIFIC_CHILD_COMPONENT.set(e,new Set(_toConsumableArray(COMPONENT_MAP[e].children))),COMPONENT_MAP[e].attrs&&COMPONENT_MAP[e].attrs.length&&COMPONENT_MAP[e].attrs.forEach(function(e){_newArrowCheck(this,r),BUILDIN_STYLE_NAMES.add(e)}.bind(this)),COMPONENT_MAP[e].noDebugLine&&NO_DEBUG_LINE_COMPONENT.add(e)}.bind(this))}();