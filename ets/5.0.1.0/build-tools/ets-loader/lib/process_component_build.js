"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bindComponentAttr=bindComponentAttr,exports.getName=getName,exports.isAttributeNode=isAttributeNode,exports.processComponentBlock=processComponentBlock,exports.processComponentBuild=processComponentBuild,exports.processComponentChild=processComponentChild,exports.validateStateStyleSyntax=validateStateStyleSyntax;var ComponentType,_typescript=_interopRequireDefault(require("typescript")),_path=_interopRequireDefault(require("path")),_pre_define=require("./pre_define"),_component_map=require("./component_map"),_validate_ui_syntax=require("./validate_ui_syntax"),_process_custom_component=require("./process_custom_component"),_utils=require("./utils"),_process_component_member=require("./process_component_member"),_main=require("../main"),_process_ui_syntax=require("./process_ui_syntax"),_compile_info=require("./compile_info");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function processComponentBuild(e,t){let r;var s=_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_RENDER_FUNCTION);return r=e.body&&e.body.statements&&e.body.statements.length&&validateRootNode(e,t)?_typescript.default.factory.updateMethodDeclaration(e,e.decorators,e.modifiers,e.asteriskToken,s,e.questionToken,e.typeParameters,e.parameters,e.type,processComponentBlock(e.body,!1,t)):_typescript.default.factory.updateMethodDeclaration(e,e.decorators,e.modifiers,e.asteriskToken,s,e.questionToken,e.typeParameters,e.parameters,e.type,e.body),r}function processComponentBlock(e,t,r,s=!1){const n=[];return processComponentChild(e,n,r),t&&n.unshift(createRenderingInProgress(!0)),s&&(n.unshift(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_TRANSITION_NAME),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),null))),n.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_TRANSITION_NAME),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null)))),t&&n.push(createRenderingInProgress(!1)),_typescript.default.factory.updateBlock(e,n)}function validateRootNode(e,t){let r=!1;var s;return 1===e.body.statements.length?(s=e.body.statements[0],(_typescript.default.isIfStatement(s)||validateFirstNode(s))&&(r=!0)):r=!1,r||t.push({type:_utils.LogType.ERROR,message:"There should have a root container component.",pos:e.body.statements.pos}),r}function validateFirstNode(e){return!(_validate_ui_syntax.componentCollection.entryComponent===_validate_ui_syntax.componentCollection.currentClassName&&!validateContainerComponent(e))}function validateContainerComponent(e){if(_typescript.default.isExpressionStatement(e)&&e.expression&&(_typescript.default.isEtsComponentExpression(e.expression)||_typescript.default.isCallExpression(e.expression))){var t={name:null};if(validateEtsComponentNode(e.expression,t),t.name&&_component_map.BUILDIN_CONTAINER_COMPONENT.has(t.name))return!0}return!1}let newsupplement={isAcceleratePreview:!1,line:0,column:0,fileName:""};function validateEtsComponentNode(e,t){let r=e;for(t.name=null;_typescript.default.isCallExpression(r)&&r.expression&&_typescript.default.isPropertyAccessExpression(r.expression)&&r.expression.expression;)r=r.expression.expression;return!!_typescript.default.isEtsComponentExpression(r)&&(_typescript.default.isIdentifier(r.expression)&&(t.name=r.expression.getText()),!0)}let sourceNode;function processComponentChild(n,i,p,e={isAcceleratePreview:!1,line:0,column:0,fileName:""}){var o=this;e.isAcceleratePreview&&(newsupplement=e,e=_typescript.default.readConfigFile(_path.default.resolve(__dirname,"../tsconfig.json"),_typescript.default.sys.readFile).config.compilerOptions,Object.assign(e,{sourceMap:!1}),sourceNode=_typescript.default.createSourceFile("",n.getText(),_typescript.default.ScriptTarget.Latest,!0,_typescript.default.ScriptKind.ETS,e)),n.statements.length&&n.statements.forEach(function(e,t,r){if(_newArrowCheck(this,o),_typescript.default.isExpressionStatement(e)){var s=getName(e);switch(getComponentType(e,p,s)){case ComponentType.innerComponent:processInnerComponent(e,t,Array.from(n.statements),i,p,s);break;case ComponentType.customComponent:newsupplement.isAcceleratePreview||(e.expression&&_typescript.default.isEtsComponentExpression(e.expression)&&e.expression.body&&processExpressionStatementChange(e,e.expression.body,p)&&(e=processExpressionStatementChange(e,e.expression.body,p)),(0,_process_custom_component.processCustomComponent)(e,i,p));break;case ComponentType.forEachComponent:processForEachComponent(e,i,p);break;case ComponentType.customBuilderMethod:case ComponentType.builderParamMethod:i.push(e)}}else _typescript.default.isIfStatement(e)?processIfStatement(e,i,p):_typescript.default.isBlock(e)||p.push({type:_utils.LogType.ERROR,message:"Only UI component syntax can be written in build method.",pos:e.getStart()})}.bind(this)),newsupplement={isAcceleratePreview:!1,line:0,column:0,fileName:""}}function processExpressionStatementChange(e,t,r){let s;if(e.expression.expression&&_typescript.default.isIdentifier(e.expression.expression)&&(s=e.expression.expression.escapedText.toString()),_process_component_member.builderParamObjectCollection.get(s)&&1===_process_component_member.builderParamObjectCollection.get(s).size)return processBlockToExpression(e,t,r,s);r.push({type:_utils.LogType.ERROR,message:`In the trailing lambda case, '${s}' must have one and only one property decorated with `+"@BuilderParam, and its @BuilderParam expects no parameter.",pos:e.getStart()})}function processBlockToExpression(e,t,r,s){s=[..._process_component_member.builderParamObjectCollection.get(s)].slice(-1)[0],r=processComponentBlock(t,!1,r),r=_typescript.default.factory.createArrowFunction(void 0,void 0,[],void 0,_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsGreaterThanToken),r),r=_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(s),r);let n=e.expression.arguments;return n=n&&!n.length?[_typescript.default.factory.createObjectLiteralExpression([r],!0)]:[_typescript.default.factory.createObjectLiteralExpression(e.expression.arguments[0].properties.concat([r]),!0)],e=_typescript.default.factory.updateExpressionStatement(e,_typescript.default.factory.updateCallExpression(e.expression,e.expression.expression,e.expression.expression.typeArguments,n))}function parseEtsComponentExpression(e){let t,r=!1,s=e.expression;for(;s;){if(_typescript.default.isCallExpression(s)&&s.expression&&_typescript.default.isPropertyAccessExpression(s.expression)&&(r=!0),_typescript.default.isEtsComponentExpression(s)){t=s;break}s=s.expression}return{etsComponentNode:t,hasAttr:r}}function processInnerComponent(n,e,t,i,r,s){var p=createComponent(n,_pre_define.COMPONENT_CREATE_FUNCTION);if(i.push(p.newNode),_main.projectConfig.isPreview&&!_component_map.NO_DEBUG_LINE_COMPONENT.has(s)){let e,t,r=1,s=1;newsupplement.isAcceleratePreview?(e=sourceNode.getLineAndCharacterOfPosition(getRealNodePos(n)),t=newsupplement.fileName,0===e.line&&(s=newsupplement.column-15),r=newsupplement.line):(e=_process_ui_syntax.transformLog.sourceFile.getLineAndCharacterOfPosition(getRealNodePos(n)),t=_process_ui_syntax.transformLog.sourceFile.fileName.replace(/\.ts$/,""));var o=_main.projectConfig.projectPath,o=""+_path.default.relative(o,t).replace(/\\+/g,"/")+`(${e.line+r}:${e.character+s})`,o=_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(getName(n)),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_DEBUGLINE_FUNCTION),_typescript.default.factory.createNodeArray([_typescript.default.factory.createStringLiteral(o)])));i.push(o)}o=parseEtsComponentExpression(n);o.etsComponentNode.body&&_typescript.default.isBlock(o.etsComponentNode.body)?(p.isButton&&(_main.projectConfig.isPreview?i.splice(-2,1,createComponent(n,_pre_define.COMPONENT_CREATE_CHILD_FUNCTION).newNode):i.splice(-1,1,createComponent(n,_pre_define.COMPONENT_CREATE_CHILD_FUNCTION).newNode)),o.hasAttr&&bindComponentAttr(n,p.identifierNode,i,r),processComponentChild(o.etsComponentNode.body,i,r)):bindComponentAttr(n,p.identifierNode,i,r),(p.isContainerComponent||p.needPop)&&i.push(createComponent(n,_pre_define.COMPONENT_POP_FUNCTION).newNode)}function getRealNodePos(e){return-1===e.pos&&e.expression?getRealNodePos(e.expression):e.getStart()}function processForEachComponent(t,e,r){var s=_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(t.expression.expression,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null));if(_typescript.default.isCallExpression(t.expression)){var n=_typescript.default.factory.createPropertyAccessExpression(t.expression.expression,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION));const i=Array.from(t.expression.arguments);let e;i.length&&(e=_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.FOREACH_OBSERVED_OBJECT),_typescript.default.factory.createIdentifier(_pre_define.FOREACH_GET_RAW_OBJECT)),void 0,[i[0]])),i.splice(0,1,e);r=processForEachBlock(t.expression,r);r&&i.splice(1,1,r),t=addForEachId(_typescript.default.factory.updateExpressionStatement(t,_typescript.default.factory.updateCallExpression(t.expression,n,t.expression.typeArguments,i)))}e.push(t,s)}function addForEachId(e){var t=e.expression;return _typescript.default.factory.updateExpressionStatement(e,_typescript.default.factory.updateCallExpression(t,t.expression,t.typeArguments,[_typescript.default.factory.createStringLiteral((++_utils.componentInfo.id).toString()),_typescript.default.factory.createThis(),...t.arguments]))}function processForEachBlock(e,t){if(1<e.arguments.length&&_typescript.default.isArrowFunction(e.arguments[1])){var r=e.expression.getText()===_pre_define.COMPONENT_LAZYFOREACH,s=e.arguments[1];const n=s.body;if(!(2<e.arguments.length)||_typescript.default.isArrowFunction(e.arguments[2])){if(_typescript.default.isBlock(n))return _typescript.default.factory.updateArrowFunction(s,s.modifiers,s.typeParameters,s.parameters,s.type,s.equalsGreaterThanToken,processComponentBlock(n,r,t));{const i=_typescript.default.factory.createExpressionStatement(n);e=_typescript.default.factory.createBlock([i],!0);return i.parent=e,_typescript.default.factory.updateArrowFunction(s,s.modifiers,s.typeParameters,s.parameters,s.type,s.equalsGreaterThanToken,processComponentBlock(e,r,t))}}t.push({type:_utils.LogType.ERROR,message:"There should be wrapped in curly braces in ForEach.",pos:n.getStart()})}return null}function createRenderingInProgress(e){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),_typescript.default.factory.createIdentifier(_pre_define.IS_RENDERING_IN_PROGRESS)),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),e?_typescript.default.factory.createTrue():_typescript.default.factory.createFalse()))}function processIfStatement(e,t,r){var s=createIfCreate(),e=processInnerIfStatement(e,0,r),r=createIfPop();t.push(s,e,r)}function processInnerIfStatement(e,t,r){_typescript.default.isIdentifier(e.expression)&&void 0===e.expression.originalKeywordKind&&!e.expression.escapedText&&(r.push({type:_utils.LogType.ERROR,message:"Condition expression cannot be null in if statement.",pos:e.expression.getStart()}),e=_typescript.default.factory.updateIfStatement(e,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_IF_UNDEFINED),e.thenStatement,e.elseStatement));var s=processThenStatement(e.thenStatement,t,r),r=processElseStatement(e.elseStatement,t,r);return _typescript.default.factory.updateIfStatement(e,e.expression,s,r)}function processThenStatement(e,t,r){return _typescript.default.isExpressionStatement(e)&&_typescript.default.isIdentifier(e.expression)&&void 0===e.expression.originalKeywordKind&&!e.expression.escapedText&&r.push({type:_utils.LogType.ERROR,message:"Then statement cannot be null in if statement.",pos:e.expression.getStart()}),e=e&&(_typescript.default.isBlock(e)?processIfBlock(e,t,r):_typescript.default.isIfStatement(e)?(e=processInnerIfStatement(e,0,r),_typescript.default.factory.createBlock([createIfCreate(),createIfBranchId(t),e,createIfPop()],!0)):processIfBlock(e=_typescript.default.factory.createBlock([e],!0),t,r))}function processElseStatement(e,t,r){return e=e&&(_typescript.default.isBlock(e)?processIfBlock(e,t+1,r):_typescript.default.isIfStatement(e)?processInnerIfStatement(e,t+1,r):processIfBlock(e=_typescript.default.factory.createBlock([e],!0),t+1,r))}function processIfBlock(e,t,r){return addIfBranchId(t,processComponentBlock(e,!1,r))}function addIfBranchId(e,t){return _typescript.default.factory.updateBlock(t,[createIfBranchId(e),...t.statements])}function createIf(){return _typescript.default.factory.createIdentifier(_pre_define.COMPONENT_IF)}function createIfCreate(){return _typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(createIf(),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),_typescript.default.factory.createNodeArray([])))}function createIfPop(){return _typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(createIf(),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null))}function createIfBranchId(e){return _typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(createIf(),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_IF_BRANCH_ID_FUNCTION),_typescript.default.factory.createNodeArray([_typescript.default.factory.createNumericLiteral(e)])))}function createComponent(e,t){const r={newNode:e,identifierNode:null,isContainerComponent:!1,isButton:!1,needPop:!1};let s=_typescript.default.factory.createIdentifier(t),n=e.expression;for(;n&&!_typescript.default.isIdentifier(n)&&n.expression;)n=n.expression;return n&&n.parent&&(_typescript.default.isCallExpression(n.parent)||_typescript.default.isEtsComponentExpression(n.parent))&&_typescript.default.isIdentifier(n)&&(n.getText()===_pre_define.COMPONENT_BUTTON&&t!==_pre_define.COMPONENT_POP_FUNCTION&&(r.isButton=!0,s=t===_pre_define.COMPONENT_CREATE_CHILD_FUNCTION?_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_CHILD_FUNCTION):_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_LABEL_FUNCTION)),_component_map.NEEDPOP_COMPONENT.has(n.getText())&&(r.needPop=!0),_component_map.BUILDIN_CONTAINER_COMPONENT.has(n.getText())&&(r.isContainerComponent=!0),r.newNode=t===_pre_define.COMPONENT_POP_FUNCTION?_typescript.default.factory.updateExpressionStatement(e,(0,_utils.createFunction)(n,s,null)):_typescript.default.factory.updateExpressionStatement(e,(0,_utils.createFunction)(n,s,n.parent.arguments)),r.identifierNode=n),r}function bindComponentAttr(e,r,t,s,n=!0,i=!1,p=!1){let o=e.expression;const a=[];var c={statement:null,kind:!1};for(_typescript.default.isPropertyAccessExpression(o)&&s.push({type:_utils.LogType.ERROR,message:`'${e.getText()}' does not meet UI component syntax.`,pos:e.getStart()});o&&_typescript.default.isCallExpression(o)&&o.expression;){let t=!1;if(o.expression&&(validatePropertyAccessExpressionWithCustomBuilder(o.expression)||validateIdentifierWithCustomBuilder(o.expression))){let e="";switch(_typescript.default.isIdentifier(o.expression)?e=o.expression.escapedText.toString():_typescript.default.isPropertyAccessExpression(o.expression)&&(e=o.expression.name.escapedText.toString()),e){case _pre_define.BIND_POPUP:o=processBindPopupBuilder(o);break;case _pre_define.BIND_DRAG_START:o=processDragStartBuilder(o);break;default:o=processCustomBuilderProperty(o)}t=!0}if(_typescript.default.isPropertyAccessExpression(o.expression)&&o.expression.name&&_typescript.default.isIdentifier(o.expression.name))addComponentAttr(o,o.expression.name,c,a,r,s,i,p),o=o.expression.expression,t=!0;else if(_typescript.default.isIdentifier(o.expression)){_component_map.INNER_COMPONENT_NAMES.has(o.expression.getText())||_component_map.GESTURE_TYPE_NAMES.has(o.expression.getText())||addComponentAttr(o,o.expression,c,a,r,s,i,p);break}t||(o=o.expression)}c.statement&&c.kind&&a.push(c.statement),a.length&&(n?t.push(...a.reverse()):t.push(...a))}function processCustomBuilderProperty(e){var r=this;const s=[];return e.arguments.forEach(function(e,t){_newArrowCheck(this,r),0===t&&isBuilderChangeNode(e)?s.push(parseBuilderNode(e)):s.push(e)}.bind(this)),e=_typescript.default.factory.updateCallExpression(e,e.expression,e.typeArguments,s)}function isBuilderChangeNode(e){return _typescript.default.isPropertyAccessExpression(e)&&e.name&&_typescript.default.isIdentifier(e.name)&&_component_map.CUSTOM_BUILDER_METHOD.has(e.name.getText())||_typescript.default.isCallExpression(e)&&e.expression&&e.expression.name&&_typescript.default.isIdentifier(e.expression.name)&&_component_map.CUSTOM_BUILDER_METHOD.has(e.expression.name.getText())||_typescript.default.isIdentifier(e)&&e.escapedText&&_component_map.CUSTOM_BUILDER_METHOD.has(e.escapedText.toString())}function parseBuilderNode(e){return isPropertyAccessExpressionNode(e)?processPropertyBuilder(e):_typescript.default.isIdentifier(e)&&_component_map.CUSTOM_BUILDER_METHOD.has(e.escapedText.toString())?processIdentifierBuilder(e):_typescript.default.isCallExpression(e)?getParsedBuilderAttrArgumentWithParams(e):void 0}function isPropertyAccessExpressionNode(e){return _typescript.default.isPropertyAccessExpression(e)&&e.expression&&e.expression.kind===_typescript.default.SyntaxKind.ThisKeyword&&e.name&&_typescript.default.isIdentifier(e.name)&&_component_map.CUSTOM_BUILDER_METHOD.has(e.name.escapedText.toString())}function processBindPopupBuilder(e){var r=this;const s=[];return e.arguments.forEach(function(e,t){_newArrowCheck(this,r),1===t?s.push(processBindPopupBuilderProperty(e)):s.push(e)}.bind(this)),e=_typescript.default.factory.updateCallExpression(e,e.expression,e.typeArguments,s)}function processDragStartBuilder(t){const r=[];if(isNodeFunction(t)){for(let e=0;e<t.arguments[0].body.statements.length;e++){var s=t.arguments[0].body.statements[e];r.push(checkStatement(s))}t=_typescript.default.factory.updateCallExpression(t,t.expression,t.typeArguments,[_typescript.default.factory.updateArrowFunction(t.arguments[0],void 0,void 0,t.arguments[0].parameters,t.arguments[0].type,t.arguments[0].equalsGreaterThanToken,_typescript.default.factory.updateBlock(t.arguments[0].body,r))])}return t}function isNodeFunction(e){return e.arguments&&e.arguments.length&&_typescript.default.isArrowFunction(e.arguments[0])&&e.arguments[0].body&&_typescript.default.isBlock(e.arguments[0].body)}function checkStatement(t){if(_typescript.default.isReturnStatement(t)){if(_typescript.default.isObjectLiteralExpression(t.expression)){const s=[];for(let e=0;e<t.expression.properties.length;e++){var r=t.expression.properties[e];checkProperty(r),s.push(r)}return _typescript.default.factory.createReturnStatement(_typescript.default.factory.createObjectLiteralExpression(s))}return _typescript.default.factory.updateReturnStatement(t,parseBuilderNode(t.expression))}return t}function checkProperty(e){isPropertyFunction(e)&&_typescript.default.factory.createPropertyAssignment(e.name,parseBuilderNode(e.initializer))}function isPropertyFunction(e){return _typescript.default.isPropertyAssignment(e)&&e.name&&_typescript.default.isIdentifier(e.name)&&e.name.escapedText.toString()===_pre_define.BUILDER_ATTR_NAME}function processBindPopupBuilderProperty(e){var r=this;const s=[];return e.properties.forEach(function(e,t){_newArrowCheck(this,r),0===t&&e.name&&_typescript.default.isIdentifier(e.name)&&e.name.escapedText.toString()===_pre_define.CUSTOM_DIALOG_CONTROLLER_BUILDER?s.push(_typescript.default.factory.updatePropertyAssignment(e,e.name,parseBuilderNode(e.initializer))):s.push(e)}.bind(this)),_typescript.default.factory.updateObjectLiteralExpression(e,s)}function processPropertyBuilder(e){return _typescript.default.factory.createObjectLiteralExpression([_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_NAME),_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(e,_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_BIND)),void 0,[_typescript.default.factory.createThis()]))])}function processIdentifierBuilder(e){return _typescript.default.factory.createObjectLiteralExpression([_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_NAME),e)])}function getParsedBuilderAttrArgumentWithParams(e){return _typescript.default.factory.createObjectLiteralExpression([_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.BUILDER_ATTR_NAME),_typescript.default.factory.createArrowFunction(void 0,void 0,[],void 0,_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsGreaterThanToken),_typescript.default.factory.createBlock([_typescript.default.factory.createExpressionStatement(e)],!0)))])}function validatePropertyAccessExpressionWithCustomBuilder(e){return _typescript.default.isPropertyAccessExpression(e)&&e.name&&_typescript.default.isIdentifier(e.name)&&_component_map.CUSTOM_BUILDER_PROPERTIES.has(e.name.escapedText.toString())}function validateIdentifierWithCustomBuilder(e){return _typescript.default.isIdentifier(e)&&_component_map.CUSTOM_BUILDER_PROPERTIES.has(e.escapedText.toString())}function createArrowFunctionFor$$(e){return _typescript.default.factory.createArrowFunction(void 0,void 0,[_typescript.default.factory.createParameterDeclaration(void 0,void 0,void 0,_typescript.default.factory.createIdentifier(_pre_define.$$_NEW_VALUE),void 0,void 0,void 0)],void 0,_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsGreaterThanToken),_typescript.default.factory.createBlock([_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(e,_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),_typescript.default.factory.createIdentifier(_pre_define.$$_NEW_VALUE)))],!1))}function updateArgumentFor$$(e){return _typescript.default.isElementAccessExpression(e)?_typescript.default.factory.updateElementAccessExpression(e,updateArgumentFor$$(e.expression),e.argumentExpression):_typescript.default.isIdentifier(e)?(_compile_info.props.push(e.getText()),e.getText()===_pre_define.$$_THIS?_typescript.default.factory.createThis():e.getText().match(/^\$\$(.|\n)+/)?_typescript.default.factory.createIdentifier(e.getText().replace(/\$\$/,"")):void 0):_typescript.default.isPropertyAccessExpression(e)?_typescript.default.factory.updatePropertyAccessExpression(e,updateArgumentFor$$(e.expression),e.name):void 0}function addComponentAttr(e,t,r,s,n,i,p,o){var a,c=t.getText();c===_pre_define.ATTRIBUTE_ANIMATION?(r.statement?s.push(r.statement):1===e.arguments.length&&e.arguments[0].kind===_typescript.default.SyntaxKind.NullKeyword||s.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.GLOBAL_CONTEXT),t,[_typescript.default.factory.createNull()]))),r.statement=_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.GLOBAL_CONTEXT),t,e.arguments)),r.kind=!1):_component_map.GESTURE_ATTRS.has(c)?(parseGesture(e,c,s,i),r.kind=!0):isExtendFunctionNode(n,c)?(s.push(_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createIdentifier(`__${n.escapedText.toString()}__`+c),void 0,e.arguments))),r.kind=!0):c===_pre_define.ATTRIBUTE_STATESTYLES?1===e.arguments.length&&_typescript.default.isObjectLiteralExpression(e.arguments[0])?(s.push(createViewStackProcessor(e,!0)),traverseStateStylesAttr(e,s,n,i),r.kind=!0):validateStateStyleSyntax(e,i):(_component_map.GLOBAL_STYLE_FUNCTION.has(c)||_component_map.INNER_STYLE_FUNCTION.has(c)?(a=_component_map.GLOBAL_STYLE_FUNCTION.get(c)||_component_map.INNER_STYLE_FUNCTION.get(c),_component_map.GLOBAL_STYLE_FUNCTION.has(c)?bindComponentAttr(a.statements[0],n,s,i,!1,!0,!0):bindComponentAttr(a.statements[0],n,s,i,!1,!0,!1)):!p&&[_pre_define.BIND_POPUP,_pre_define.CHECKED].includes(c)&&e.arguments.length&&e.arguments[0]&&e.arguments[0].getText().match(/^\$\$(.|\n)+/)?(classifyArgumentsNum(e.arguments,a=[],c,n),s.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(n,t,a)))):(p&&(_component_map.COMMON_ATTRS.has(c)||validateStateStyleSyntax(e,i)),e=loopEtsComponent(e,p,o),s.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(n,t,e.arguments)))),r.kind=!0)}function loopEtsComponent(r,s,n){var i=this;return r.arguments.forEach(function(e,t){_newArrowCheck(this,i),s&&n&&(r.arguments[t]=traverseStylesAttr(e)),_typescript.default.isNewExpression(e)&&e.expression&&_typescript.default.isEtsComponentExpression(e.expression)?r.arguments[t]=_typescript.default.factory.updateNewExpression(e,e.expression.expression,void 0,e.expression.arguments):_typescript.default.isEtsComponentExpression(e)?r.arguments[t]=_typescript.default.factory.createCallExpression(e.expression,void 0,e.arguments):(_typescript.default.isCallExpression(e)||_typescript.default.isNewExpression(e))&&e.expression&&_typescript.default.isPropertyAccessExpression(e.expression)&&e.expression.expression&&_typescript.default.isEtsComponentExpression(e.expression.expression)&&(r.arguments[t].expression.expression=_typescript.default.factory.createCallExpression(e.expression.expression.expression,void 0,e.expression.expression.arguments))}.bind(this)),r}function classifyArgumentsNum(e,t,r,s){var n;r===_pre_define.BIND_POPUP&&2===e.length?(n=updateArgumentFor$$(e[0]),t.push(generateObjectFor$$(n),e[1])):r===_pre_define.CHECKED&&1===e.length&&s.getText()===_pre_define.RADIO&&(e=updateArgumentFor$$(e[0]),t.push(e,createArrowFunctionFor$$(e)))}function traverseStylesAttr(e){var t=this;return _typescript.default.isStringLiteral(e)?e=_typescript.default.factory.createStringLiteral(e.text):_typescript.default.isNumericLiteral(e)&&(e=_typescript.default.factory.createNumericLiteral(e.text)),_typescript.default.visitEachChild(e,function(e){return _newArrowCheck(this,t),traverseStylesAttr(e)}.bind(this),_process_ui_syntax.contextGlobal)}function generateObjectFor$$(e){return _typescript.default.factory.createObjectLiteralExpression([_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.$$_VALUE),e),_typescript.default.factory.createPropertyAssignment(_typescript.default.factory.createIdentifier(_pre_define.$$_CHANGE_EVENT),createArrowFunctionFor$$(e))],!1)}function createViewStackProcessor(e,t){const r=[];return!t&&e.name&&r.push(_typescript.default.factory.createStringLiteral(e.name.getText())),_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.VIEW_STACK_PROCESSOR),_typescript.default.factory.createIdentifier(_pre_define.VISUAL_STATE)),void 0,r))}function traverseStateStylesAttr(r,s,n,i){var p=this;r.arguments[0].properties.reverse().forEach(function(e){var t;_newArrowCheck(this,p),_typescript.default.isPropertyAccessExpression(e.initializer)&&e.initializer.expression.getText()===_pre_define.THIS&&_component_map.INNER_STYLE_FUNCTION.get(e.initializer.name.getText())?(t=e.initializer.name.getText(),bindComponentAttr(_component_map.INNER_STYLE_FUNCTION.get(t).statements[0],n,s,i,!1,!0)):_typescript.default.isIdentifier(e.initializer)&&_component_map.GLOBAL_STYLE_FUNCTION.get(e.initializer.getText())?(t=e.initializer.getText(),bindComponentAttr(_component_map.GLOBAL_STYLE_FUNCTION.get(t).statements[0],n,s,i,!1,!0)):_typescript.default.isObjectLiteralExpression(e.initializer)&&1===e.initializer.properties.length&&_typescript.default.isPropertyAssignment(e.initializer.properties[0])?bindComponentAttr(_typescript.default.factory.createExpressionStatement(e.initializer.properties[0].initializer),n,s,i,!1,!0):validateStateStyleSyntax(r,i),e.name&&s.push(createViewStackProcessor(e,!1))}.bind(this))}function isExtendFunctionNode(e,t){if(e&&_component_map.EXTEND_ATTRIBUTE.has(e.escapedText.toString())){const r=[..._component_map.EXTEND_ATTRIBUTE.get(e.escapedText.toString())];if(r.includes(t))return!0}return!1}const gestureMap=new Map([[_pre_define.PRIORITY_GESTURE_ATTRIBUTE,_pre_define.GESTURE_ENUM_VALUE_HIGH],[_pre_define.PARALLEL_GESTURE_ATTRIBUTE,_pre_define.GESTURE_ENUM_VALUE_PARALLEL],[_pre_define.GESTURE_ATTRIBUTE,_pre_define.GESTURE_ENUM_VALUE_LOW]]);function parseGesture(e,t,r,s){r.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_GESTURE),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null))),parseGestureInterface(e,r,s);const n=_typescript.default.factory.createNodeArray([_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.GESTURE_ENUM_KEY),_typescript.default.factory.createIdentifier(gestureMap.get(t)))]);e.arguments&&1<e.arguments.length&&_typescript.default.isPropertyAccessExpression(e.arguments[1])&&n.push(e.arguments[1]),r.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_GESTURE),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),n)))}function processGestureType(e,t,r,s=!1){const n=[];var i=_typescript.default.factory.createExpressionStatement(e);let p=e.expression;for(;p&&!_typescript.default.isIdentifier(p)&&p.expression;)p=p.expression;if(p&&p.parent&&_typescript.default.isCallExpression(p.parent)&&_typescript.default.isIdentifier(p)&&_component_map.GESTURE_TYPE_NAMES.has(p.escapedText.toString()))if(n.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(p,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null))),p.escapedText.toString()===_pre_define.COMPONENT_GESTURE_GROUP){const o=[];parseGestureInterface(p.parent,o,r,!0),n.push(...o.reverse()),bindComponentAttr(i,p,n,r,!1);let e=null;p.parent.arguments&&p.parent.arguments.length&&(e=_typescript.default.factory.createNodeArray([p.parent.arguments[0]])),n.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(p,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),e)))}else bindComponentAttr(i,p,n,r,!1),n.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(p,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),p.parent.arguments)));n.length&&(s?t.push(...n.reverse()):t.push(...n))}function parseGestureInterface(e,t,r,s=!1){var n=this;e.arguments&&e.arguments.length&&e.arguments.forEach(function(e){_newArrowCheck(this,n),_typescript.default.isCallExpression(e)&&processGestureType(e,t,r,s)}.bind(this))}function getName(e){let t=e.expression,r;for(;t;){if(_typescript.default.isIdentifier(t)&&t.parent&&(_typescript.default.isCallExpression(t.parent)||_typescript.default.isEtsComponentExpression(t.parent))){r=t.escapedText.toString();break}if(_typescript.default.isPropertyAccessExpression(t)&&t.name&&_typescript.default.isIdentifier(t.name)&&!_component_map.BUILDIN_STYLE_NAMES.has(t.name.escapedText.toString())){r=t.name.escapedText.toString();break}t=t.expression}return r}function isAttributeNode(e){let t=e.expression,r;for(;t;){if(_typescript.default.isCallExpression(t)&&t.expression&&_typescript.default.isIdentifier(t.expression)){r=t.expression.escapedText.toString();break}t=t.expression}return _component_map.BUILDIN_STYLE_NAMES.has(r)}function isEtsComponent(e){let t=!1,r=e.expression;for(;r;)_typescript.default.isEtsComponentExpression(r)&&(t=!0),r=r.expression;return t}function getComponentType(e,t,r){return isEtsComponent(e)?_validate_ui_syntax.componentCollection.customComponents.has(r)?ComponentType.customComponent:ComponentType.innerComponent:_validate_ui_syntax.componentCollection.customComponents.has(r)?ComponentType.customComponent:r===_pre_define.COMPONENT_FOREACH||r===_pre_define.COMPONENT_LAZYFOREACH?ComponentType.forEachComponent:_component_map.CUSTOM_BUILDER_METHOD.has(r)?ComponentType.customBuilderMethod:_process_component_member.builderParamObjectCollection.get(_validate_ui_syntax.componentCollection.currentClassName)&&_process_component_member.builderParamObjectCollection.get(_validate_ui_syntax.componentCollection.currentClassName).has(r)?ComponentType.builderParamMethod:(isAttributeNode(e)||t.push({type:_utils.LogType.ERROR,message:`'${e.getText()}' does not meet UI component syntax.`,pos:e.getStart()}),null)}function validateStateStyleSyntax(e,t){t.push({type:_utils.LogType.ERROR,message:".stateStyles doesn't conform standard.",pos:e.getStart()})}!function(e){e[e.innerComponent=0]="innerComponent",e[e.customComponent=1]="customComponent",e[e.forEachComponent=2]="forEachComponent",e[e.customBuilderMethod=3]="customBuilderMethod",e[e.builderParamMethod=4]="builderParamMethod"}(ComponentType=ComponentType||{});