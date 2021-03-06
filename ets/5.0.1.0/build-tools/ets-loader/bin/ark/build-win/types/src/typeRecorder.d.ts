import * as ts from "typescript";
import { ModuleStmt } from "./modules";
export declare class TypeRecorder {
    private static instance;
    private type2Index;
    private variable2Type;
    private userDefinedTypeSet;
    private typeSummary;
    private class2InstanceMap;
    private arrayTypeMap;
    private unionTypeMap;
    private exportedType;
    private declaredType;
    private namespaceMap;
    private anonymousReExport;
    private constructor();
    static getInstance(): TypeRecorder;
    static createInstance(): TypeRecorder;
    setTypeSummary(): void;
    addUserDefinedTypeSet(index: number): void;
    countUserDefinedTypeSet(): number;
    addType2Index(typeNode: ts.Node, index: number): void;
    setVariable2Type(variableNode: ts.Node, index: number): void;
    hasType(typeNode: ts.Node): boolean;
    tryGetTypeIndex(typeNode: ts.Node): number;
    tryGetVariable2Type(variableNode: ts.Node): number;
    setArrayTypeMap(contentTypeIndex: number, arrayTypeIndex: number): void;
    hasArrayTypeMapping(contentTypeIndex: number): boolean;
    getFromArrayTypeMap(contentTypeIndex: number): number;
    setUnionTypeMap(unionStr: string, unionTypeIndex: number): void;
    hasUnionTypeMapping(unionStr: string): boolean;
    getFromUnionTypeMap(unionStr: string): number;
    setClass2InstanceMap(classIndex: number, instanceIndex: number): void;
    hasClass2InstanceMap(classIndex: number): boolean;
    getClass2InstanceMap(classIndex: number): number;
    addImportedType(moduleStmt: ModuleStmt): void;
    addExportedType(moduleStmt: ModuleStmt): void;
    addNonReExportedType(exportedName: string, typeNode: ts.Node, localNode: ts.Node): void;
    setExportedType(exportedName: string, typeIndex: number): void;
    setDeclaredType(exportedName: string, typeIndex: number): void;
    addAnonymousReExport(redirectName: string): void;
    setNamespaceMap(namespace: string, filePath: string): void;
    inNampespaceMap(targetName: string): boolean;
    getPathForNamespace(targetName: string): string;
    getType2Index(): Map<ts.Node, number>;
    getVariable2Type(): Map<ts.Node, number>;
    getTypeSet(): Set<number>;
    getExportedType(): Map<string, number>;
    getDeclaredType(): Map<string, number>;
    getAnonymousReExport(): string[];
    getNamespaceMap(): Map<string, string>;
    printNodeMap(map: Map<ts.Node, number>): void;
    printExportMap(map: Map<string, number>): void;
    printReExportMap(map: Map<string, string>): void;
    getLog(): void;
}
//# sourceMappingURL=typeRecorder.d.ts.map