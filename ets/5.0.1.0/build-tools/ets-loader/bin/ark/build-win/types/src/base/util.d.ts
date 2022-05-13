import * as ts from "typescript";
import { IRNode } from "../irnodes";
import { Scope } from "../scope";
export declare function containSpreadElement(args?: ts.NodeArray<ts.Expression>): boolean;
export declare function hasExportKeywordModifier(node: ts.Node): boolean;
export declare function hasDefaultKeywordModifier(node: ts.Node): boolean;
export declare function setVariableExported(varName: string, scope: Scope): void;
export declare function execute(cmd: string, args: Array<string>): number;
export declare function addUnicodeEscape(text: string): string;
export declare function isBindingPattern(node: ts.Node): boolean;
export declare function isObjectBindingOrAssignmentPattern(node: ts.Node): boolean;
export declare function isArrayBindingOrAssignmentPattern(node: ts.Node): boolean;
export declare function isBindingOrAssignmentPattern(node: ts.Node): boolean;
export declare function isMemberExpression(node: ts.Node): boolean;
export declare function isUndefinedIdentifier(node: ts.Node): boolean;
export declare function isAnonymousFunctionDefinition(node: ts.Node): boolean;
export declare function escapeUnicode(data: string): string;
export declare function initiateTs2abc(args: Array<string>): any;
export declare function terminateWritePipe(ts2abc: any): void;
export declare function listenChildExit(child: any): void;
export declare function listenErrorEvent(child: any): void;
export declare function isRangeInst(ins: IRNode): boolean;
export declare function getRangeExplicitVregNums(ins: IRNode): number;
export declare function isRestParameter(parameter: ts.ParameterDeclaration): boolean;
export declare function getParamLengthOfFunc(node: ts.FunctionLikeDeclaration): number;
export declare function getParameterLength4Ctor(node: ts.ClassLikeDeclaration): number;
export declare function getRangeStartVregPos(ins: IRNode): number;
export declare function setPos(node: ts.Node): ts.Node;
//# sourceMappingURL=util.d.ts.map