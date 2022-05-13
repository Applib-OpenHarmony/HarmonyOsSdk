import * as ts from "typescript";
import { TypeChecker } from "../typeChecker";
import { TypeRecorder } from "../typeRecorder";
import { LiteralBuffer } from "./literal";
export declare enum PrimitiveType {
    ANY = 0,
    NUMBER = 1,
    BOOLEAN = 2,
    VOID = 3,
    STRING = 4,
    SYMBOL = 5,
    NULL = 6,
    UNDEFINED = 7,
    INT = 8,
    _LENGTH = 50
}
export declare enum L2Type {
    _COUNTER = 0,
    CLASS = 1,
    CLASSINST = 2,
    FUNCTION = 3,
    UNION = 4,
    ARRAY = 5,
    OBJECT = 6,
    EXTERNAL = 7,
    INTERFACE = 8
}
export declare enum ModifierAbstract {
    NONABSTRACT = 0,
    ABSTRACT = 1
}
export declare enum ModifierStatic {
    NONSTATIC = 0,
    STATIC = 1
}
export declare enum ModifierReadonly {
    NONREADONLY = 0,
    READONLY = 1
}
export declare enum AccessFlag {
    PUBLIC = 0,
    PRIVATE = 1,
    PROTECTED = 2
}
export declare abstract class BaseType {
    abstract transfer2LiteralBuffer(): LiteralBuffer;
    protected typeChecker: TypeChecker;
    protected typeRecorder: TypeRecorder;
    protected addCurrentType(node: ts.Node, index: number): void;
    protected setVariable2Type(variableNode: ts.Node, index: number): void;
    protected tryGetTypeIndex(typeNode: ts.Node): number;
    protected getOrCreateRecordForDeclNode(typeNode: ts.Node, variableNode?: ts.Node): PrimitiveType;
    protected getOrCreateRecordForTypeNode(typeNode: ts.TypeNode | undefined, variableNode?: ts.Node): PrimitiveType;
    protected getIndexFromTypeArrayBuffer(type: BaseType): number;
    protected setTypeArrayBuffer(type: BaseType, index: number): void;
}
export declare class PlaceHolderType extends BaseType {
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class TypeSummary extends BaseType {
    preservedIndex: number;
    userDefinedClassNum: number;
    anonymousRedirect: Array<string>;
    constructor();
    setInfo(userDefinedClassNum: number, anonymousRedirect: Array<string>): void;
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class ClassType extends BaseType {
    modifier: number;
    extendsHeritage: number;
    implementsHeritages: Array<number>;
    staticFields: Map<string, Array<number>>;
    staticMethods: Map<string, number>;
    fields: Map<string, Array<number>>;
    methods: Map<string, number>;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(classNode: ts.ClassDeclaration | ts.ClassExpression);
    private fillInModifiers;
    private fillInHeritages;
    private fillInFields;
    private fillInMethods;
    private fillInFieldsAndMethods;
    transfer2LiteralBuffer(): LiteralBuffer;
    private transferFields2Literal;
    private transferMethods2Literal;
}
export declare class ClassInstType extends BaseType {
    shiftedReferredClassIndex: number;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(referredClassIndex: number);
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class FunctionType extends BaseType {
    name: string;
    accessFlag: number;
    modifierStatic: number;
    parameters: Array<number>;
    returnType: number;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(funcNode: ts.FunctionLikeDeclaration | ts.MethodSignature);
    getFunctionName(): string;
    private fillInModifiers;
    private fillInParameters;
    private fillInReturn;
    getModifier(): number;
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class ExternalType extends BaseType {
    fullRedirectNath: string;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(importName: string, redirectPath: string);
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class UnionType extends BaseType {
    unionedTypeArray: Array<number>;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(typeNode: ts.Node);
    setOrReadFromArrayRecord(typeNode: ts.Node): void;
    hasUnionTypeMapping(unionStr: string): boolean;
    getFromUnionTypeMap(unionStr: string): number;
    setUnionTypeMap(unionStr: string, shiftedTypeIndex: number): void;
    fillInUnionArray(typeNode: ts.Node, unionedTypeArray: Array<number>): void;
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class ArrayType extends BaseType {
    referedTypeIndex: number;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(typeNode: ts.Node);
    setOrReadFromArrayRecord(): void;
    hasArrayTypeMapping(referedTypeIndex: number): boolean;
    getFromArrayTypeMap(referedTypeIndex: number): number;
    setArrayTypeMap(referedTypeIndex: number, shiftedTypeIndex: number): void;
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class ObjectType extends BaseType {
    private properties;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(objNode: ts.TypeLiteralNode);
    fillInMembers(objNode: ts.TypeLiteralNode): void;
    transfer2LiteralBuffer(): LiteralBuffer;
}
export declare class InterfaceType extends BaseType {
    heritages: Array<number>;
    fields: Map<string, Array<number>>;
    methods: Array<number>;
    typeIndex: number;
    shiftedTypeIndex: number;
    constructor(interfaceNode: ts.InterfaceDeclaration);
    private fillInHeritages;
    private fillInFields;
    private fillInMethods;
    private fillInFieldsAndMethods;
    transfer2LiteralBuffer(): LiteralBuffer;
    private transferFields2Literal;
    private transferMethods2Literal;
}
//# sourceMappingURL=typeSystem.d.ts.map