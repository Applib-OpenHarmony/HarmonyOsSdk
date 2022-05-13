import * as ts from "typescript";
import { DebugPosInfo, NodeKind } from "./debuginfo";
import { Scope } from "./scope";
export declare enum IRNodeKind {
    NOP = 0,
    MOV = 1,
    MOV_64 = 2,
    MOV_OBJ = 3,
    MOVI = 4,
    MOVI_64 = 5,
    FMOVI_64 = 6,
    MOV_NULL = 7,
    LDA = 8,
    LDA_64 = 9,
    LDA_OBJ = 10,
    LDAI = 11,
    LDAI_64 = 12,
    FLDAI_64 = 13,
    LDA_STR = 14,
    LDA_CONST = 15,
    LDA_TYPE = 16,
    LDA_NULL = 17,
    STA = 18,
    STA_64 = 19,
    STA_OBJ = 20,
    CMP_64 = 21,
    FCMPL_64 = 22,
    FCMPG_64 = 23,
    JMP = 24,
    JEQ_OBJ = 25,
    JNE_OBJ = 26,
    JEQZ_OBJ = 27,
    JNEZ_OBJ = 28,
    JEQZ = 29,
    JNEZ = 30,
    JLTZ = 31,
    JGTZ = 32,
    JLEZ = 33,
    JGEZ = 34,
    JEQ = 35,
    JNE = 36,
    JLT = 37,
    JGT = 38,
    JLE = 39,
    JGE = 40,
    FNEG_64 = 41,
    NEG = 42,
    NEG_64 = 43,
    ADD2 = 44,
    ADD2_64 = 45,
    SUB2 = 46,
    SUB2_64 = 47,
    MUL2 = 48,
    MUL2_64 = 49,
    FADD2_64 = 50,
    FSUB2_64 = 51,
    FMUL2_64 = 52,
    FDIV2_64 = 53,
    FMOD2_64 = 54,
    DIV2 = 55,
    DIV2_64 = 56,
    MOD2 = 57,
    MOD2_64 = 58,
    ADDI = 59,
    SUBI = 60,
    MULI = 61,
    ANDI = 62,
    ORI = 63,
    SHLI = 64,
    SHRI = 65,
    ASHRI = 66,
    DIVI = 67,
    MODI = 68,
    ADD = 69,
    SUB = 70,
    MUL = 71,
    DIV = 72,
    MOD = 73,
    INCI = 74,
    LDARR_8 = 75,
    LDARRU_8 = 76,
    LDARR_16 = 77,
    LDARRU_16 = 78,
    LDARR = 79,
    LDARR_64 = 80,
    FLDARR_32 = 81,
    FLDARR_64 = 82,
    LDARR_OBJ = 83,
    STARR_8 = 84,
    STARR_16 = 85,
    STARR = 86,
    STARR_64 = 87,
    FSTARR_32 = 88,
    FSTARR_64 = 89,
    STARR_OBJ = 90,
    LENARR = 91,
    NEWARR = 92,
    NEWOBJ = 93,
    INITOBJ_SHORT = 94,
    INITOBJ = 95,
    INITOBJ_RANGE = 96,
    LDOBJ = 97,
    LDOBJ_64 = 98,
    LDOBJ_OBJ = 99,
    STOBJ = 100,
    STOBJ_64 = 101,
    STOBJ_OBJ = 102,
    LDOBJ_V = 103,
    LDOBJ_V_64 = 104,
    LDOBJ_V_OBJ = 105,
    STOBJ_V = 106,
    STOBJ_V_64 = 107,
    STOBJ_V_OBJ = 108,
    LDSTATIC = 109,
    LDSTATIC_64 = 110,
    LDSTATIC_OBJ = 111,
    STSTATIC = 112,
    STSTATIC_64 = 113,
    STSTATIC_OBJ = 114,
    RETURN = 115,
    RETURN_64 = 116,
    RETURN_OBJ = 117,
    RETURN_VOID = 118,
    THROW = 119,
    CHECKCAST = 120,
    ISINSTANCE = 121,
    CALL_SHORT = 122,
    CALL = 123,
    CALL_RANGE = 124,
    CALL_ACC_SHORT = 125,
    CALL_ACC = 126,
    CALL_VIRT_SHORT = 127,
    CALL_VIRT = 128,
    CALL_VIRT_RANGE = 129,
    CALL_VIRT_ACC_SHORT = 130,
    CALL_VIRT_ACC = 131,
    MOV_DYN = 132,
    LDA_DYN = 133,
    STA_DYN = 134,
    LDAI_DYN = 135,
    FLDAI_DYN = 136,
    RETURN_DYN = 137,
    CALLI_DYN_SHORT = 138,
    CALLI_DYN = 139,
    CALLI_DYN_RANGE = 140,
    FMOVI = 141,
    I32TOF64 = 142,
    UCMP = 143,
    NOT = 144,
    ECMA_LDNAN = 145,
    FLDAI = 146,
    U32TOF64 = 147,
    UCMP_64 = 148,
    NOT_64 = 149,
    ECMA_LDINFINITY = 150,
    FCMPL = 151,
    I64TOF64 = 152,
    DIVU2 = 153,
    AND2 = 154,
    ECMA_LDGLOBALTHIS = 155,
    FCMPG = 156,
    U64TOF64 = 157,
    DIVU2_64 = 158,
    AND2_64 = 159,
    ECMA_LDUNDEFINED = 160,
    FNEG = 161,
    F64TOI32 = 162,
    MODU2 = 163,
    OR2 = 164,
    ECMA_LDNULL = 165,
    FADD2 = 166,
    F64TOI64 = 167,
    MODU2_64 = 168,
    OR2_64 = 169,
    ECMA_LDSYMBOL = 170,
    FSUB2 = 171,
    F64TOU32 = 172,
    XOR2 = 173,
    ECMA_LDGLOBAL = 174,
    FMUL2 = 175,
    F64TOU64 = 176,
    XOR2_64 = 177,
    ECMA_LDTRUE = 178,
    FDIV2 = 179,
    I32TOU1 = 180,
    SHL2 = 181,
    ECMA_LDFALSE = 182,
    FMOD2 = 183,
    I64TOU1 = 184,
    SHL2_64 = 185,
    ECMA_THROWDYN = 186,
    I32TOF32 = 187,
    U32TOU1 = 188,
    SHR2 = 189,
    ECMA_TYPEOFDYN = 190,
    U32TOF32 = 191,
    U64TOU1 = 192,
    SHR2_64 = 193,
    ECMA_LDLEXENVDYN = 194,
    I64TOF32 = 195,
    I32TOI64 = 196,
    ASHR2 = 197,
    ECMA_POPLEXENVDYN = 198,
    U64TOF32 = 199,
    I32TOI16 = 200,
    ASHR2_64 = 201,
    ECMA_GETUNMAPPEDARGS = 202,
    F32TOF64 = 203,
    I32TOU16 = 204,
    XORI = 205,
    ECMA_GETPROPITERATOR = 206,
    F32TOI32 = 207,
    I32TOI8 = 208,
    AND = 209,
    ECMA_ASYNCFUNCTIONENTER = 210,
    F32TOI64 = 211,
    I32TOU8 = 212,
    OR = 213,
    ECMA_LDHOLE = 214,
    F32TOU32 = 215,
    I64TOI32 = 216,
    XOR = 217,
    ECMA_RETURNUNDEFINED = 218,
    F32TOU64 = 219,
    U32TOI64 = 220,
    SHL = 221,
    ECMA_CREATEEMPTYOBJECT = 222,
    F64TOF32 = 223,
    U32TOI16 = 224,
    SHR = 225,
    ECMA_CREATEEMPTYARRAY = 226,
    U32TOU16 = 227,
    ASHR = 228,
    ECMA_GETITERATOR = 229,
    U32TOI8 = 230,
    ECMA_THROWTHROWNOTEXISTS = 231,
    U32TOU8 = 232,
    ECMA_THROWPATTERNNONCOERCIBLE = 233,
    U64TOI32 = 234,
    ECMA_LDHOMEOBJECT = 235,
    U64TOU32 = 236,
    ECMA_THROWDELETESUPERPROPERTY = 237,
    ECMA_DEBUGGER = 238,
    ECMA_ADD2DYN = 239,
    ECMA_SUB2DYN = 240,
    ECMA_MUL2DYN = 241,
    ECMA_DIV2DYN = 242,
    ECMA_MOD2DYN = 243,
    ECMA_EQDYN = 244,
    ECMA_NOTEQDYN = 245,
    ECMA_LESSDYN = 246,
    ECMA_LESSEQDYN = 247,
    ECMA_GREATERDYN = 248,
    ECMA_GREATEREQDYN = 249,
    ECMA_SHL2DYN = 250,
    ECMA_SHR2DYN = 251,
    ECMA_ASHR2DYN = 252,
    ECMA_AND2DYN = 253,
    ECMA_OR2DYN = 254,
    ECMA_XOR2DYN = 255,
    ECMA_TONUMBER = 256,
    ECMA_NEGDYN = 257,
    ECMA_NOTDYN = 258,
    ECMA_INCDYN = 259,
    ECMA_DECDYN = 260,
    ECMA_EXPDYN = 261,
    ECMA_ISINDYN = 262,
    ECMA_INSTANCEOFDYN = 263,
    ECMA_STRICTNOTEQDYN = 264,
    ECMA_STRICTEQDYN = 265,
    ECMA_RESUMEGENERATOR = 266,
    ECMA_GETRESUMEMODE = 267,
    ECMA_CREATEGENERATOROBJ = 268,
    ECMA_THROWCONSTASSIGNMENT = 269,
    ECMA_GETTEMPLATEOBJECT = 270,
    ECMA_GETNEXTPROPNAME = 271,
    ECMA_CALLARG0DYN = 272,
    ECMA_THROWIFNOTOBJECT = 273,
    ECMA_ITERNEXT = 274,
    ECMA_CLOSEITERATOR = 275,
    ECMA_COPYMODULE = 276,
    ECMA_SUPERCALLSPREAD = 277,
    ECMA_DELOBJPROP = 278,
    ECMA_NEWOBJSPREADDYN = 279,
    ECMA_CREATEITERRESULTOBJ = 280,
    ECMA_SUSPENDGENERATOR = 281,
    ECMA_ASYNCFUNCTIONAWAITUNCAUGHT = 282,
    ECMA_THROWUNDEFINEDIFHOLE = 283,
    ECMA_CALLARG1DYN = 284,
    ECMA_COPYDATAPROPERTIES = 285,
    ECMA_STARRAYSPREAD = 286,
    ECMA_GETITERATORNEXT = 287,
    ECMA_SETOBJECTWITHPROTO = 288,
    ECMA_LDOBJBYVALUE = 289,
    ECMA_STOBJBYVALUE = 290,
    ECMA_STOWNBYVALUE = 291,
    ECMA_LDSUPERBYVALUE = 292,
    ECMA_STSUPERBYVALUE = 293,
    ECMA_LDOBJBYINDEX = 294,
    ECMA_STOBJBYINDEX = 295,
    ECMA_STOWNBYINDEX = 296,
    ECMA_CALLSPREADDYN = 297,
    ECMA_ASYNCFUNCTIONRESOLVE = 298,
    ECMA_ASYNCFUNCTIONREJECT = 299,
    ECMA_CALLARGS2DYN = 300,
    ECMA_CALLARGS3DYN = 301,
    ECMA_DEFINEGETTERSETTERBYVALUE = 302,
    ECMA_NEWOBJDYNRANGE = 303,
    ECMA_CALLIRANGEDYN = 304,
    ECMA_CALLITHISRANGEDYN = 305,
    ECMA_SUPERCALL = 306,
    ECMA_CREATEOBJECTWITHEXCLUDEDKEYS = 307,
    ECMA_DEFINEFUNCDYN = 308,
    ECMA_DEFINENCFUNCDYN = 309,
    ECMA_DEFINEGENERATORFUNC = 310,
    ECMA_DEFINEASYNCFUNC = 311,
    ECMA_DEFINEMETHOD = 312,
    ECMA_NEWLEXENVDYN = 313,
    ECMA_COPYRESTARGS = 314,
    ECMA_CREATEARRAYWITHBUFFER = 315,
    ECMA_CREATEOBJECTHAVINGMETHOD = 316,
    ECMA_THROWIFSUPERNOTCORRECTCALL = 317,
    ECMA_CREATEOBJECTWITHBUFFER = 318,
    ECMA_LDLEXVARDYN = 319,
    ECMA_STLEXVARDYN = 320,
    ECMA_DEFINECLASSWITHBUFFER = 321,
    ECMA_IMPORTMODULE = 322,
    ECMA_STMODULEVAR = 323,
    ECMA_TRYLDGLOBALBYNAME = 324,
    ECMA_TRYSTGLOBALBYNAME = 325,
    ECMA_LDGLOBALVAR = 326,
    ECMA_STGLOBALVAR = 327,
    ECMA_LDOBJBYNAME = 328,
    ECMA_STOBJBYNAME = 329,
    ECMA_STOWNBYNAME = 330,
    ECMA_LDSUPERBYNAME = 331,
    ECMA_STSUPERBYNAME = 332,
    ECMA_LDMODVARBYNAME = 333,
    ECMA_CREATEREGEXPWITHLITERAL = 334,
    ECMA_ISTRUE = 335,
    ECMA_ISFALSE = 336,
    ECMA_STCONSTTOGLOBALRECORD = 337,
    ECMA_STLETTOGLOBALRECORD = 338,
    ECMA_STCLASSTOGLOBALRECORD = 339,
    ECMA_STOWNBYVALUEWITHNAMESET = 340,
    ECMA_STOWNBYNAMEWITHNAMESET = 341,
    ECMA_LDFUNCTION = 342,
    ECMA_NEWLEXENVWITHNAMEDYN = 343,
    ECMA_LDBIGINT = 344,
    VREG = 345,
    IMM = 346,
    LABEL = 347,
    VIRTUALSTARTINS_DYN = 348,
    VIRTUALENDINS_DYN = 349,
    DEFINE_GLOBAL_VAR = 350
}
export declare function getInstructionSize(opcode: IRNodeKind): 0 | 2 | 1 | 3 | 4 | 5 | 6 | 10 | 9 | 7;
export declare enum ResultType {
    None = 0,
    Unknown = 1,
    Int = 2,
    Long = 3,
    Float = 4,
    Obj = 5,
    Boolean = 6
}
export declare enum ResultDst {
    None = 0,
    Acc = 1,
    VReg = 2
}
export declare enum BuiltIns {
    NaN = 0,
    Infinity = 1,
    globalThis = 2,
    undefined = 3,
    Boolean = 4,
    Number = 5,
    String = 6,
    BigInt = 7,
    Symbol = 8,
    Null = 9,
    Object = 10,
    Function = 11,
    Global = 12,
    True = 13,
    False = 14,
    LexEnv = 15,
    MAX_BUILTIN = 16
}
export declare type OperandType = VReg | Imm | Label | string | number;
export declare enum OperandKind {
    SrcVReg = 0,
    DstVReg = 1,
    SrcDstVReg = 2,
    Imm = 3,
    Id = 4,
    StringId = 5,
    Label = 6
}
export declare namespace OperandKind {
}
export declare type Format = number[][];
export declare function getInsnMnemonic(opcode: IRNodeKind): string;
export declare function getInsnFormats(opcode: IRNodeKind): number[][][];
export declare abstract class IRNode {
    readonly kind: IRNodeKind;
    readonly operands: OperandType[];
    private node;
    constructor(kind: IRNodeKind, operands: OperandType[]);
    debugPosInfo: DebugPosInfo;
    toString(): string;
    setNode(node: ts.Node | NodeKind): void;
    getNodeName(): string;
    getMnemonic(): string;
    getFormats(): number[][][];
}
export declare abstract class Intrinsic extends IRNode {
    readonly kind: IRNodeKind;
    readonly operands: OperandType[];
    constructor(kind: IRNodeKind, operands: OperandType[]);
    toString(): string;
}
export declare class VReg {
    num: number;
    toString(): string;
    constructor();
    getTypeIndex(): number;
    setTypeIndex(typeIndex: number): void;
    getVariableName(): string;
    setVariableName(variableName: string): void;
}
export declare class Imm extends IRNode {
    readonly value: number;
    constructor(value: number);
    toString(): string;
}
export declare class Label extends IRNode {
    private static global_id;
    readonly id: number;
    constructor();
    toString(): string;
}
export declare class DebugInsStartPlaceHolder extends IRNode {
    private scope;
    constructor(scope: Scope);
    getScope(): Scope;
}
export declare class DebugInsEndPlaceHolder extends IRNode {
    private scope;
    constructor(scope: Scope);
    getScope(): Scope;
}
export declare class Nop extends IRNode {
    constructor();
}
export declare class Mov extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class MovWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class MovObj extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Movi extends IRNode {
    constructor(v: VReg, imm: Imm);
}
export declare class MoviWide extends IRNode {
    constructor(v: VReg, imm: Imm);
}
export declare class FmoviWide extends IRNode {
    constructor(v: VReg, imm: Imm);
}
export declare class MovNull extends IRNode {
    constructor(v: VReg);
}
export declare class Lda extends IRNode {
    constructor(v: VReg);
}
export declare class LdaWide extends IRNode {
    constructor(v: VReg);
}
export declare class LdaObj extends IRNode {
    constructor(v: VReg);
}
export declare class Ldai extends IRNode {
    constructor(imm: Imm);
}
export declare class LdaiWide extends IRNode {
    constructor(imm: Imm);
}
export declare class FldaiWide extends IRNode {
    constructor(imm: Imm);
}
export declare class LdaStr extends IRNode {
    constructor(string_id: string);
}
export declare class LdaConst extends IRNode {
    constructor(v: VReg, literalarray_id: string);
}
export declare class LdaType extends IRNode {
    constructor(type_id: string);
}
export declare class LdaNull extends IRNode {
    constructor();
}
export declare class Sta extends IRNode {
    constructor(v: VReg);
}
export declare class StaWide extends IRNode {
    constructor(v: VReg);
}
export declare class StaObj extends IRNode {
    constructor(v: VReg);
}
export declare class CmpWide extends IRNode {
    constructor(v: VReg);
}
export declare class FcmplWide extends IRNode {
    constructor(v: VReg);
}
export declare class FcmpgWide extends IRNode {
    constructor(v: VReg);
}
export declare class Jmp extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class JeqObj extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class JneObj extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class JeqzObj extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class JnezObj extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jeqz extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jnez extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jltz extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jgtz extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jlez extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jgez extends IRNode {
    constructor(imm: Label);
    getTarget(): Label;
}
export declare class Jeq extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class Jne extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class Jlt extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class Jgt extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class Jle extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class Jge extends IRNode {
    constructor(v: VReg, imm: Label);
    getTarget(): Label;
}
export declare class FnegWide extends IRNode {
    constructor();
}
export declare class Neg extends IRNode {
    constructor();
}
export declare class NegWide extends IRNode {
    constructor();
}
export declare class Add2 extends IRNode {
    constructor(v: VReg);
}
export declare class Add2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Sub2 extends IRNode {
    constructor(v: VReg);
}
export declare class Sub2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Mul2 extends IRNode {
    constructor(v: VReg);
}
export declare class Mul2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Fadd2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Fsub2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Fmul2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Fdiv2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Fmod2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Div2 extends IRNode {
    constructor(v: VReg);
}
export declare class Div2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Mod2 extends IRNode {
    constructor(v: VReg);
}
export declare class Mod2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Addi extends IRNode {
    constructor(imm: Imm);
}
export declare class Subi extends IRNode {
    constructor(imm: Imm);
}
export declare class Muli extends IRNode {
    constructor(imm: Imm);
}
export declare class Andi extends IRNode {
    constructor(imm: Imm);
}
export declare class Ori extends IRNode {
    constructor(imm: Imm);
}
export declare class Shli extends IRNode {
    constructor(imm: Imm);
}
export declare class Shri extends IRNode {
    constructor(imm: Imm);
}
export declare class Ashri extends IRNode {
    constructor(imm: Imm);
}
export declare class Divi extends IRNode {
    constructor(imm: Imm);
}
export declare class Modi extends IRNode {
    constructor(imm: Imm);
}
export declare class Add extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Sub extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Mul extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Div extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Mod extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Inci extends IRNode {
    constructor(v: VReg, imm: Imm);
}
export declare class Ldarr8 extends IRNode {
    constructor(v: VReg);
}
export declare class Ldarru8 extends IRNode {
    constructor(v: VReg);
}
export declare class Ldarr16 extends IRNode {
    constructor(v: VReg);
}
export declare class Ldarru16 extends IRNode {
    constructor(v: VReg);
}
export declare class Ldarr extends IRNode {
    constructor(v: VReg);
}
export declare class LdarrWide extends IRNode {
    constructor(v: VReg);
}
export declare class Fldarr32 extends IRNode {
    constructor(v: VReg);
}
export declare class FldarrWide extends IRNode {
    constructor(v: VReg);
}
export declare class LdarrObj extends IRNode {
    constructor(v: VReg);
}
export declare class Starr8 extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Starr16 extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Starr extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class StarrWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Fstarr32 extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class FstarrWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class StarrObj extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class Lenarr extends IRNode {
    constructor(v: VReg);
}
export declare class Newarr extends IRNode {
    constructor(v1: VReg, v2: VReg, type_id: string);
}
export declare class Newobj extends IRNode {
    constructor(v: VReg, type_id: string);
}
export declare class InitobjShort extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg);
}
export declare class Initobj extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, v4: VReg);
}
export declare class InitobjRange extends IRNode {
    constructor(method_id: string, v: VReg);
}
export declare class Ldobj extends IRNode {
    constructor(v: VReg, field_id: string);
}
export declare class LdobjWide extends IRNode {
    constructor(v: VReg, field_id: string);
}
export declare class LdobjObj extends IRNode {
    constructor(v: VReg, field_id: string);
}
export declare class Stobj extends IRNode {
    constructor(v: VReg, field_id: string);
}
export declare class StobjWide extends IRNode {
    constructor(v: VReg, field_id: string);
}
export declare class StobjObj extends IRNode {
    constructor(v: VReg, field_id: string);
}
export declare class LdobjV extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
}
export declare class LdobjVWide extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
}
export declare class LdobjVObj extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
}
export declare class StobjV extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
}
export declare class StobjVWide extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
}
export declare class StobjVObj extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
}
export declare class Ldstatic extends IRNode {
    constructor(field_id: string);
}
export declare class LdstaticWide extends IRNode {
    constructor(field_id: string);
}
export declare class LdstaticObj extends IRNode {
    constructor(field_id: string);
}
export declare class Ststatic extends IRNode {
    constructor(field_id: string);
}
export declare class StstaticWide extends IRNode {
    constructor(field_id: string);
}
export declare class StstaticObj extends IRNode {
    constructor(field_id: string);
}
export declare class Return extends IRNode {
    constructor();
}
export declare class ReturnWide extends IRNode {
    constructor();
}
export declare class ReturnObj extends IRNode {
    constructor();
}
export declare class ReturnVoid extends IRNode {
    constructor();
}
export declare class Throw extends IRNode {
    constructor(v: VReg);
}
export declare class Checkcast extends IRNode {
    constructor(type_id: string);
}
export declare class Isinstance extends IRNode {
    constructor(type_id: string);
}
export declare class CallShort extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg);
}
export declare class Call extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
}
export declare class CallRange extends IRNode {
    constructor(method_id: string, v: VReg[]);
}
export declare class CallAccShort extends IRNode {
    constructor(method_id: string, v: VReg, imm: Imm);
}
export declare class CallAcc extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, imm: Imm);
}
export declare class CallVirtShort extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg);
}
export declare class CallVirt extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
}
export declare class CallVirtRange extends IRNode {
    constructor(method_id: string, v?: VReg);
}
export declare class CallVirtAccShort extends IRNode {
    constructor(method_id: string, v: VReg, imm: Imm);
}
export declare class CallVirtAcc extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, imm: Imm);
}
export declare class MovDyn extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class LdaDyn extends IRNode {
    constructor(v: VReg);
}
export declare class StaDyn extends IRNode {
    constructor(v: VReg);
}
export declare class LdaiDyn extends IRNode {
    constructor(imm: Imm);
}
export declare class FldaiDyn extends IRNode {
    constructor(imm: Imm);
}
export declare class ReturnDyn extends IRNode {
    constructor();
}
export declare class CalliDynShort extends IRNode {
    constructor(imm: Imm, v1?: VReg, v2?: VReg, v3?: VReg);
}
export declare class CalliDyn extends IRNode {
    constructor(imm: Imm, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg, v5?: VReg);
}
export declare class CalliDynRange extends IRNode {
    constructor(imm: Imm, v: VReg[]);
}
export declare class Fmovi extends IRNode {
    constructor(v: VReg, imm: Imm);
}
export declare class I32tof64 extends IRNode {
    constructor();
}
export declare class Ucmp extends IRNode {
    constructor(v: VReg);
}
export declare class Not extends IRNode {
    constructor();
}
export declare class EcmaLdnan extends Intrinsic {
    constructor();
}
export declare class Fldai extends IRNode {
    constructor(imm: Imm);
}
export declare class U32tof64 extends IRNode {
    constructor();
}
export declare class UcmpWide extends IRNode {
    constructor(v: VReg);
}
export declare class NotWide extends IRNode {
    constructor();
}
export declare class EcmaLdinfinity extends Intrinsic {
    constructor();
}
export declare class Fcmpl extends IRNode {
    constructor(v: VReg);
}
export declare class I64tof64 extends IRNode {
    constructor();
}
export declare class Divu2 extends IRNode {
    constructor(v: VReg);
}
export declare class And2 extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdglobalthis extends Intrinsic {
    constructor();
}
export declare class Fcmpg extends IRNode {
    constructor(v: VReg);
}
export declare class U64tof64 extends IRNode {
    constructor();
}
export declare class Divu2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class And2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdundefined extends Intrinsic {
    constructor();
}
export declare class Fneg extends IRNode {
    constructor();
}
export declare class F64toi32 extends IRNode {
    constructor();
}
export declare class Modu2 extends IRNode {
    constructor(v: VReg);
}
export declare class Or2 extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdnull extends Intrinsic {
    constructor();
}
export declare class Fadd2 extends IRNode {
    constructor(v: VReg);
}
export declare class F64toi64 extends IRNode {
    constructor();
}
export declare class Modu2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class Or2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdsymbol extends Intrinsic {
    constructor();
}
export declare class Fsub2 extends IRNode {
    constructor(v: VReg);
}
export declare class F64tou32 extends IRNode {
    constructor();
}
export declare class Xor2 extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdglobal extends Intrinsic {
    constructor();
}
export declare class Fmul2 extends IRNode {
    constructor(v: VReg);
}
export declare class F64tou64 extends IRNode {
    constructor();
}
export declare class Xor2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdtrue extends Intrinsic {
    constructor();
}
export declare class Fdiv2 extends IRNode {
    constructor(v: VReg);
}
export declare class I32tou1 extends IRNode {
    constructor();
}
export declare class Shl2 extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdfalse extends Intrinsic {
    constructor();
}
export declare class Fmod2 extends IRNode {
    constructor(v: VReg);
}
export declare class I64tou1 extends IRNode {
    constructor();
}
export declare class Shl2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaThrowdyn extends Intrinsic {
    constructor();
}
export declare class I32tof32 extends IRNode {
    constructor();
}
export declare class U32tou1 extends IRNode {
    constructor();
}
export declare class Shr2 extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaTypeofdyn extends Intrinsic {
    constructor();
}
export declare class U32tof32 extends IRNode {
    constructor();
}
export declare class U64tou1 extends IRNode {
    constructor();
}
export declare class Shr2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaLdlexenvdyn extends Intrinsic {
    constructor();
}
export declare class I64tof32 extends IRNode {
    constructor();
}
export declare class I32toi64 extends IRNode {
    constructor();
}
export declare class Ashr2 extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaPoplexenvdyn extends Intrinsic {
    constructor();
}
export declare class U64tof32 extends IRNode {
    constructor();
}
export declare class I32toi16 extends IRNode {
    constructor();
}
export declare class Ashr2Wide extends IRNode {
    constructor(v: VReg);
}
export declare class EcmaGetunmappedargs extends Intrinsic {
    constructor();
}
export declare class F32tof64 extends IRNode {
    constructor();
}
export declare class I32tou16 extends IRNode {
    constructor();
}
export declare class Xori extends IRNode {
    constructor(imm: Imm);
}
export declare class EcmaGetpropiterator extends Intrinsic {
    constructor();
}
export declare class F32toi32 extends IRNode {
    constructor();
}
export declare class I32toi8 extends IRNode {
    constructor();
}
export declare class And extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaAsyncfunctionenter extends Intrinsic {
    constructor();
}
export declare class F32toi64 extends IRNode {
    constructor();
}
export declare class I32tou8 extends IRNode {
    constructor();
}
export declare class Or extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaLdhole extends Intrinsic {
    constructor();
}
export declare class F32tou32 extends IRNode {
    constructor();
}
export declare class I64toi32 extends IRNode {
    constructor();
}
export declare class Xor extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaReturnundefined extends Intrinsic {
    constructor();
}
export declare class F32tou64 extends IRNode {
    constructor();
}
export declare class U32toi64 extends IRNode {
    constructor();
}
export declare class Shl extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaCreateemptyobject extends Intrinsic {
    constructor();
}
export declare class F64tof32 extends IRNode {
    constructor();
}
export declare class U32toi16 extends IRNode {
    constructor();
}
export declare class Shr extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaCreateemptyarray extends Intrinsic {
    constructor();
}
export declare class U32tou16 extends IRNode {
    constructor();
}
export declare class Ashr extends IRNode {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaGetiterator extends Intrinsic {
    constructor();
}
export declare class U32toi8 extends IRNode {
    constructor();
}
export declare class EcmaThrowthrownotexists extends Intrinsic {
    constructor();
}
export declare class U32tou8 extends IRNode {
    constructor();
}
export declare class EcmaThrowpatternnoncoercible extends Intrinsic {
    constructor();
}
export declare class U64toi32 extends IRNode {
    constructor();
}
export declare class EcmaLdhomeobject extends Intrinsic {
    constructor();
}
export declare class U64tou32 extends IRNode {
    constructor();
}
export declare class EcmaThrowdeletesuperproperty extends Intrinsic {
    constructor();
}
export declare class EcmaDebugger extends Intrinsic {
    constructor();
}
export declare class EcmaAdd2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaSub2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaMul2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaDiv2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaMod2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaEqdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaNoteqdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaLessdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaLesseqdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaGreaterdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaGreatereqdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaShl2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaShr2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaAshr2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaAnd2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaOr2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaXor2dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaTonumber extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaNegdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaNotdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaIncdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaDecdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaExpdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaIsindyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaInstanceofdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaStrictnoteqdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaStricteqdyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaResumegenerator extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaGetresumemode extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaCreategeneratorobj extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaThrowconstassignment extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaGettemplateobject extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaGetnextpropname extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaCallarg0dyn extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaThrowifnotobject extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaIternext extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaCloseiterator extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaCopymodule extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaSupercallspread extends Intrinsic {
    constructor(v: VReg);
}
export declare class EcmaDelobjprop extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaNewobjspreaddyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaCreateiterresultobj extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaSuspendgenerator extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaAsyncfunctionawaituncaught extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaThrowundefinedifhole extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaCallarg1dyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaCopydataproperties extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaStarrayspread extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaGetiteratornext extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaSetobjectwithproto extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaLdobjbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaStobjbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaStownbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaLdsuperbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaStsuperbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaLdobjbyindex extends Intrinsic {
    constructor(v: VReg, imm: Imm);
}
export declare class EcmaStobjbyindex extends Intrinsic {
    constructor(v: VReg, imm: Imm);
}
export declare class EcmaStownbyindex extends Intrinsic {
    constructor(v: VReg, imm: Imm);
}
export declare class EcmaCallspreaddyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
}
export declare class EcmaAsyncfunctionresolve extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
}
export declare class EcmaAsyncfunctionreject extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
}
export declare class EcmaCallargs2dyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
}
export declare class EcmaCallargs3dyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg, v4: VReg);
}
export declare class EcmaDefinegettersetterbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg, v4: VReg);
}
export declare class EcmaNewobjdynrange extends Intrinsic {
    constructor(imm: Imm, v: VReg[]);
}
export declare class EcmaCallirangedyn extends Intrinsic {
    constructor(imm: Imm, v: VReg[]);
}
export declare class EcmaCallithisrangedyn extends Intrinsic {
    constructor(imm: Imm, v: VReg[]);
}
export declare class EcmaSupercall extends Intrinsic {
    constructor(imm: Imm, v: VReg);
}
export declare class EcmaCreateobjectwithexcludedkeys extends Intrinsic {
    constructor(imm: Imm, v1: VReg, v2: VReg[]);
}
export declare class EcmaDefinefuncdyn extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
}
export declare class EcmaDefinencfuncdyn extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
}
export declare class EcmaDefinegeneratorfunc extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
}
export declare class EcmaDefineasyncfunc extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
}
export declare class EcmaDefinemethod extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
}
export declare class EcmaNewlexenvdyn extends Intrinsic {
    constructor(imm: Imm);
}
export declare class EcmaCopyrestargs extends Intrinsic {
    constructor(imm: Imm);
}
export declare class EcmaCreatearraywithbuffer extends Intrinsic {
    constructor(imm: Imm);
}
export declare class EcmaCreateobjecthavingmethod extends Intrinsic {
    constructor(imm: Imm);
}
export declare class EcmaThrowifsupernotcorrectcall extends Intrinsic {
    constructor(imm: Imm);
}
export declare class EcmaCreateobjectwithbuffer extends Intrinsic {
    constructor(imm: Imm);
}
export declare class EcmaLdlexvardyn extends Intrinsic {
    constructor(imm1: Imm, imm2: Imm);
}
export declare class EcmaStlexvardyn extends Intrinsic {
    constructor(imm1: Imm, imm2: Imm, v: VReg);
}
export declare class EcmaDefineclasswithbuffer extends Intrinsic {
    constructor(method_id: string, imm1: Imm, imm2: Imm, v1: VReg, v2: VReg);
}
export declare class EcmaImportmodule extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaStmodulevar extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaTryldglobalbyname extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaTrystglobalbyname extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaLdglobalvar extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaStglobalvar extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaLdobjbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaStobjbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaStownbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaLdsuperbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaStsuperbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaLdmodvarbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaCreateregexpwithliteral extends Intrinsic {
    constructor(string_id: string, imm: Imm);
}
export declare class EcmaIstrue extends Intrinsic {
    constructor();
}
export declare class EcmaIsfalse extends Intrinsic {
    constructor();
}
export declare class EcmaStconsttoglobalrecord extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaStlettoglobalrecord extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaStclasstoglobalrecord extends Intrinsic {
    constructor(string_id: string);
}
export declare class EcmaStownbyvaluewithnameset extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
}
export declare class EcmaStownbynamewithnameset extends Intrinsic {
    constructor(string_id: string, v: VReg);
}
export declare class EcmaLdfunction extends Intrinsic {
    constructor();
}
export declare class EcmaNewlexenvwithnamedyn extends Intrinsic {
    constructor(imm1: Imm, imm2: Imm);
}
export declare class EcmaLdbigint extends Intrinsic {
    constructor(string_id: string);
}
//# sourceMappingURL=irnodes.d.ts.map