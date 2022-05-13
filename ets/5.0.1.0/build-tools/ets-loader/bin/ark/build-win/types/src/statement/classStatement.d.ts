import * as ts from "typescript";
import { Property, PropertyKind } from "../base/properties";
import { Compiler } from "../compiler";
import { VReg } from "../irnodes";
import { Recorder } from "../recorder";
import { Scope } from "../scope";
export declare function compileClassDeclaration(compiler: Compiler, stmt: ts.ClassLikeDeclaration): void;
export declare function AddCtor2Class(recorder: Recorder, classNode: ts.ClassLikeDeclaration, scope: Scope): void;
export declare function compileDefaultConstructor(compiler: Compiler, ctrNode: ts.ConstructorDeclaration): void;
export declare function compileDefaultInitClassMembers(compiler: Compiler, node: ts.ConstructorDeclaration): void;
export declare function compileReturnThis4Ctor(compiler: Compiler, node: ts.ConstructorDeclaration, unreachableFlag: boolean): void;
export declare function compileConstructor(compiler: Compiler, node: ts.ConstructorDeclaration, unreachableFlag: boolean): void;
export declare function compileSuperCall(compiler: Compiler, node: ts.CallExpression, args: VReg[], hasSpread: boolean): void;
export declare function extractCtorOfClass(stmt: ts.ClassLikeDeclaration): ts.ConstructorDeclaration;
export declare function defineClassMember(propName: string | number | ts.ComputedPropertyName | undefined, propValue: ts.Node, propKind: PropertyKind, properties: Property[], namedPropertyMap: Map<string, Property>): boolean;
export declare function getClassNameForConstructor(classNode: ts.ClassLikeDeclaration): string;
export declare function setPrototypeAttributes(compiler: Compiler, node: ts.Node, classReg: VReg, propReg: VReg, storeReg: VReg): boolean;
export declare function shouldReturnThisForConstruct(stmt: ts.ReturnStatement): boolean;
export declare function compileSuperProperty(compiler: Compiler, expr: ts.Expression, thisReg: VReg, prop: VReg | string | number): void;
export declare function checkValidUseSuperBeforeSuper(compiler: Compiler, node: ts.Node): void;
//# sourceMappingURL=classStatement.d.ts.map