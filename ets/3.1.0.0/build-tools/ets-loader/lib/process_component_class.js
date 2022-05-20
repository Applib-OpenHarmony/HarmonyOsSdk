"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createReference=createReference,exports.isProperty=isProperty,exports.processComponentClass=processComponentClass;var _typescript=_interopRequireDefault(require("typescript")),_pre_define=require("./pre_define"),_component_map=require("./component_map"),_validate_ui_syntax=require("./validate_ui_syntax"),_process_component_constructor=require("./process_component_constructor"),_process_component_member=require("./process_component_member"),_process_component_build=require("./process_component_build"),_utils=require("./utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function processComponentClass(e,t,r,a){validateInheritClass(e,r);a=processMembers(e.members,e.name,t,r,a,checkPreview(e));return _typescript.default.factory.updateClassDeclaration(e,void 0,e.modifiers,e.name,e.typeParameters,updateHeritageClauses(e),a)}function checkPreview(e){for(var t=!1,r=0;r<e.decorators.length;r++)if(e.decorators[r].getText().replace(/\((.|\n)*\)/,"").trim()===_pre_define.COMPONENT_DECORATOR_PREVIEW){t=!0;break}return t}function processMembers(e,a,s,i,o,n){var p=this,c={count:0},d=(0,_process_component_constructor.getInitConstructor)(e),_=[],u=new Map,l=[],f=[],y={hasController:!_validate_ui_syntax.componentCollection.customDialogs.has(a.getText())};return e.forEach(function(e){var t,r;_newArrowCheck(this,p),_typescript.default.isPropertyDeclaration(e)&&(r=(t=(0,_process_component_member.processMemberVariableDecorators)(a,e,d,u,y,i,o,s,n)).isItemUpdate()?t.getProperity():e,t.getVariableGet()&&_.push(t.getVariableGet()),t.getVariableSet()&&_.push(t.getVariableSet()),t.isCtorUpdate()&&(d=t.getCtor()),t.getUpdateParams()&&l.push(t.getUpdateParams()),t.isDeleteParams()&&f.push(e),t.getControllerSet()&&_.push(t.getControllerSet())),(r=_typescript.default.isMethodDeclaration(e)&&e.name?processComponentMethod(e,a,s,i,c):r)&&_.push(r)}.bind(this)),validateBuildMethodCount(c,a,i),validateHasController(a,y,i),_.unshift(addDeleteParamsFunc(f)),_.unshift(addUpdateParamsFunc(l)),_.unshift((0,_process_component_constructor.addConstructor)(d,u)),_}function processComponentMethod(e,t,r,a,s){var i=e,o=e.name.getText();if(o===_pre_define.COMPONENT_BUILD_FUNCTION)s.count=s.count+1,i=processBuildMember(e,r,a),_process_component_member.curPropMap.clear();else if(e.body&&_typescript.default.isBlock(e.body))if(o===_pre_define.COMPONENT_TRANSITION_FUNCTION)i=_typescript.default.factory.updateMethodDeclaration(e,e.decorators,e.modifiers,e.asteriskToken,e.name,e.questionToken,e.typeParameters,e.parameters,e.type,(0,_process_component_build.processComponentBlock)(e.body,!1,a,!0));else if((0,_utils.hasDecorator)(e,_pre_define.COMPONENT_BUILDER_DECORATOR))_component_map.CUSTOM_BUILDER_METHOD.add(o),i=_typescript.default.factory.updateMethodDeclaration(e,void 0,e.modifiers,e.asteriskToken,e.name,e.questionToken,e.typeParameters,e.parameters,e.type,(0,_process_component_build.processComponentBlock)(e.body,!1,a));else if((0,_utils.hasDecorator)(e,_pre_define.COMPONENT_STYLES_DECORATOR))return void(e.parameters&&0===e.parameters.length?(_component_map.INNER_STYLE_FUNCTION.set(o,e.body),_component_map.STYLES_ATTRIBUTE.add(o),_component_map.BUILDIN_STYLE_NAMES.add(o),_process_component_member.decoratorParamSet.add(_pre_define.STYLES)):a.push({type:_utils.LogType.ERROR,message:"@Styles can't have parameters.",pos:e.getStart()}));return _typescript.default.visitNode(i,function e(t){_typescript.default.isCallExpression(t)&&_typescript.default.isIdentifier(t.expression)&&(t.expression.escapedText.toString()===_pre_define.ATTRIBUTE_ANIMATETO&&(t=processAnimateTo(t)));return _typescript.default.visitEachChild(t,e,r)})}function processBuildMember(e,r,a){e.parameters.length&&a.push({type:_utils.LogType.ERROR,message:"The 'build' method can not have arguments.",pos:e.getStart()});e=(0,_process_component_build.processComponentBuild)(e,a);return _typescript.default.visitNode(e,function e(t){isGeometryView(t)&&(t=processGeometryView(t,a));isProperty(t)&&(t=createReference(t));if(_typescript.default.isPropertyAccessExpression(t)&&_typescript.default.isIdentifier(t.name)&&_process_component_member.stateObjectCollection.has(t.name.escapedText.toString())&&t.parent&&_typescript.default.isCallExpression(t.parent)&&_typescript.default.isPropertyAccessExpression(t.parent.expression)&&t.parent.expression.name.escapedText.toString()!==_pre_define.FOREACH_GET_RAW_OBJECT)return _typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.FOREACH_OBSERVED_OBJECT),_typescript.default.factory.createIdentifier(_pre_define.FOREACH_GET_RAW_OBJECT)),void 0,[t]);if((_typescript.default.isIdentifier(t)||_typescript.default.isPropertyAccessExpression(t))&&validateBuilderFunctionNode(t))return getParsedBuilderAttrArgument(t);return _typescript.default.visitEachChild(t,e,r)})}function validateBuilderFunctionNode(e){return!(!(_typescript.default.isPropertyAccessExpression(e)&&e.expression&&e.name&&e.expression.kind===_typescript.default.SyntaxKind.ThisKeyword&&_typescript.default.isIdentifier(e.name)&&_component_map.CUSTOM_BUILDER_METHOD.has(e.name.escapedText.toString())||_typescript.default.isIdentifier(e)&&_component_map.CUSTOM_BUILDER_METHOD.has(e.escapedText.toString()))||_typescript.default.isPropertyAccessExpression(e)&&validateBuilderParam(e)||_typescript.default.isIdentifier(e)&&e.parent&&_typescript.default.isPropertyAccessExpression(e.parent)&&validateBuilderParam(e.parent))}function validateBuilderParam(e){return!(!e.parent||!_typescript.default.isCallExpression(e.parent)||e.parent.expression!==e)}function getParsedBuilderAttrArgument(e){var t=null;return _typescript.default.isPropertyAccessExpression(e)?t=_typescript.default.factory.createObjectLiteralExpression([_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_NAME),_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(e,_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_BIND)),void 0,[_typescript.default.factory.createThis()]))]):_typescript.default.isIdentifier(e)&&(t=_typescript.default.factory.createObjectLiteralExpression([_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_NAME),e)])),t}function isGeometryView(e){if(_typescript.default.isExpressionStatement(e)&&_typescript.default.isCallExpression(e.expression)){var t=e.expression,e=t.expression,t=t.arguments;if(_typescript.default.isPropertyAccessExpression(e)&&_typescript.default.isIdentifier(e.expression)&&e.expression.escapedText.toString()===_pre_define.GEOMETRY_VIEW&&_typescript.default.isIdentifier(e.name)&&e.name.escapedText.toString()===_pre_define.COMPONENT_CREATE_FUNCTION&&t&&1===t.length&&(_typescript.default.isArrowFunction(t[0])||_typescript.default.isFunctionExpression(t[0])))return!0}return!1}function processGeometryView(e,t){var r=e.expression,a=r.arguments[0];return _typescript.default.factory.updateExpressionStatement(e,_typescript.default.factory.updateCallExpression(r,r.expression,void 0,[_typescript.default.factory.createArrowFunction(void 0,void 0,a.parameters,void 0,_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsGreaterThanToken),getGeometryReaderFunctionBlock(a,t))]))}function getGeometryReaderFunctionBlock(e,t){var r;return _typescript.default.isBlock(e.body)?r=e.body:_typescript.default.isArrowFunction(e)&&_typescript.default.isCallExpression(e.body)&&(r=_typescript.default.factory.createBlock([_typescript.default.factory.createExpressionStatement(e.body)])),(0,_process_component_build.processComponentBlock)(r,!1,t)}function updateHeritageClauses(e){var t=[],r=_typescript.default.factory.createHeritageClause(_typescript.default.SyntaxKind.ExtendsKeyword,[_typescript.default.factory.createExpressionWithTypeArguments(_typescript.default.factory.createIdentifier(_pre_define.BASE_COMPONENT_NAME),[])]);return e.heritageClauses&&t.push.apply(t,_toConsumableArray(e.heritageClauses)),t.push(r),_typescript.default.factory.createNodeArray(t)}function isProperty(e){if(e.parent&&_typescript.default.isObjectLiteralExpression(e.parent)&&e.parent.parent&&_typescript.default.isCallExpression(e.parent.parent)&&_typescript.default.isPropertyAssignment(e)&&_typescript.default.isIdentifier(e.name)){if(_typescript.default.isIdentifier(e.parent.parent.expression)&&!_component_map.BUILDIN_STYLE_NAMES.has(e.parent.parent.expression.escapedText.toString())&&_validate_ui_syntax.componentCollection.customComponents.has(e.parent.parent.expression.escapedText.toString()))return!0;if(_typescript.default.isPropertyAccessExpression(e.parent.parent.expression)&&_typescript.default.isIdentifier(e.parent.parent.expression.expression)&&_validate_ui_syntax.componentCollection.customComponents.has(e.parent.parent.expression.name.escapedText.toString()))return!0}return!1}function createReference(e){var t,r,a,s=getParentNode(e,_validate_ui_syntax.linkCollection).slice(1),i=e.name;return s&&_typescript.default.isPropertyAssignment(e)&&_typescript.default.isIdentifier(i)&&s.includes(i.escapedText.toString())&&(r=/^\$/g,a=e.initializer,_typescript.default.isIdentifier(a)&&a.escapedText.toString().match(r)?s.includes(i.escapedText.toString())&&(t=a.escapedText.toString().replace(r,"")):_typescript.default.isPropertyAccessExpression(a)&&a.expression&&a.expression.kind===_typescript.default.SyntaxKind.ThisKeyword&&_typescript.default.isIdentifier(a.name)&&a.name.escapedText.toString().match(r)&&s.includes(i.escapedText.toString())&&(t=a.name.escapedText.toString().replace(r,"")),t&&(e=addDoubleUnderline(e,i,t))),e}function addDoubleUnderline(e,t,r){return _typescript.default.factory.updatePropertyAssignment(e,t,_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),_typescript.default.factory.createIdentifier("__".concat(r))))}function getParentNode(e,t){var r,a=e.parent.parent.expression,e=new Set;return _typescript.default.isIdentifier(a)?(r=a.escapedText.toString(),e=t.get(r)):_typescript.default.isPropertyAccessExpression(a)&&(r=a.name.escapedText.toString(),e=t.get(r)),e=e||new Set,[r].concat(_toConsumableArray(e))}function processAnimateTo(e){return _typescript.default.factory.updateCallExpression(e,_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.GLOBAL_CONTEXT),_typescript.default.factory.createIdentifier(_pre_define.ATTRIBUTE_ANIMATETO)),e.typeArguments,e.arguments)}function addUpdateParamsFunc(e){return createParamsInitBlock(_pre_define.COMPONENT_CONSTRUCTOR_UPDATE_PARAMS,e)}function addDeleteParamsFunc(e){var t=this,r=[];e.forEach(function(e){_newArrowCheck(this,t);e=e.name,e=_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),_typescript.default.factory.createIdentifier("__".concat(e.escapedText.toString()))),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CONSTRUCTOR_DELETE_PARAMS)),void 0,[]));r.push(e)}.bind(this));e=_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.CREATE_CONSTRUCTOR_SUBSCRIBER_MANAGER),_typescript.default.factory.createIdentifier(_pre_define.CREATE_CONSTRUCTOR_GET_FUNCTION)),void 0,[]),_typescript.default.factory.createIdentifier(_pre_define.CREATE_CONSTRUCTOR_DELETE_FUNCTION)),void 0,[_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),_typescript.default.factory.createIdentifier(_pre_define.ABOUT_TO_BE_DELETE_FUNCTION_ID)),void 0,[])]));return r.push(e),createParamsInitBlock(_pre_define.COMPONENT_CONSTRUCTOR_DELETE_PARAMS,r)}function createParamsInitBlock(e,t){return _typescript.default.factory.createMethodDeclaration(void 0,void 0,void 0,_typescript.default.factory.createIdentifier(e),void 0,void 0,[_typescript.default.factory.createParameterDeclaration(void 0,void 0,void 0,e===_pre_define.COMPONENT_CONSTRUCTOR_DELETE_PARAMS?void 0:_typescript.default.factory.createIdentifier(_pre_define.CREATE_CONSTRUCTOR_PARAMS),void 0,void 0,void 0)],void 0,_typescript.default.factory.createBlock(t,!0))}function validateBuildMethodCount(e,t,r){1!==e.count&&r.push({type:_utils.LogType.ERROR,message:"struct '".concat(t.getText(),"' must be at least or at most one 'build' method."),pos:t.getStart()})}function validateInheritClass(e,t){e.heritageClauses&&t.push({type:_utils.LogType.ERROR,message:"@Component should not be inherit other Classes.",pos:e.heritageClauses.pos})}function validateHasController(e,t,r){t.hasController||r.push({type:_utils.LogType.ERROR,message:"@CustomDialog component should have a property of the CustomDialogController type.",pos:e.pos})}