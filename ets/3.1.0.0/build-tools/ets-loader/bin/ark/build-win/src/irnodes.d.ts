import * as ts from "typescript";
import { DebugPosInfo, NodeKind } from "./debuginfo";
export declare enum IRNodeKind {
    VREG = 0,
    IMM = 1,
    LABEL = 2,
    VIRTUALINS_DYN = 3,
    DEFINE_GLOBAL_VAR = 4,
    NOP = 5,
    MOV = 6,
    MOV_64 = 7,
    MOV_OBJ = 8,
    MOVI = 9,
    MOVI_64 = 10,
    FMOVI_64 = 11,
    MOV_NULL = 12,
    LDA = 13,
    LDA_64 = 14,
    LDA_OBJ = 15,
    LDAI = 16,
    LDAI_64 = 17,
    FLDAI_64 = 18,
    LDA_STR = 19,
    LDA_CONST = 20,
    LDA_TYPE = 21,
    LDA_NULL = 22,
    STA = 23,
    STA_64 = 24,
    STA_OBJ = 25,
    CMP_64 = 26,
    FCMPL_64 = 27,
    FCMPG_64 = 28,
    JMP = 29,
    JEQ_OBJ = 30,
    JNE_OBJ = 31,
    JEQZ_OBJ = 32,
    JNEZ_OBJ = 33,
    JEQZ = 34,
    JNEZ = 35,
    JLTZ = 36,
    JGTZ = 37,
    JLEZ = 38,
    JGEZ = 39,
    JEQ = 40,
    JNE = 41,
    JLT = 42,
    JGT = 43,
    JLE = 44,
    JGE = 45,
    FNEG_64 = 46,
    NEG = 47,
    NEG_64 = 48,
    ADD2 = 49,
    ADD2_64 = 50,
    SUB2 = 51,
    SUB2_64 = 52,
    MUL2 = 53,
    MUL2_64 = 54,
    FADD2_64 = 55,
    FSUB2_64 = 56,
    FMUL2_64 = 57,
    FDIV2_64 = 58,
    FMOD2_64 = 59,
    DIV2 = 60,
    DIV2_64 = 61,
    MOD2 = 62,
    MOD2_64 = 63,
    ADDI = 64,
    SUBI = 65,
    MULI = 66,
    ANDI = 67,
    ORI = 68,
    SHLI = 69,
    SHRI = 70,
    ASHRI = 71,
    DIVI = 72,
    MODI = 73,
    ADD = 74,
    SUB = 75,
    MUL = 76,
    DIV = 77,
    MOD = 78,
    INCI = 79,
    LDARR_8 = 80,
    LDARRU_8 = 81,
    LDARR_16 = 82,
    LDARRU_16 = 83,
    LDARR = 84,
    LDARR_64 = 85,
    FLDARR_32 = 86,
    FLDARR_64 = 87,
    LDARR_OBJ = 88,
    STARR_8 = 89,
    STARR_16 = 90,
    STARR = 91,
    STARR_64 = 92,
    FSTARR_32 = 93,
    FSTARR_64 = 94,
    STARR_OBJ = 95,
    LENARR = 96,
    NEWARR = 97,
    NEWOBJ = 98,
    INITOBJ_SHORT = 99,
    INITOBJ = 100,
    INITOBJ_RANGE = 101,
    LDOBJ = 102,
    LDOBJ_64 = 103,
    LDOBJ_OBJ = 104,
    STOBJ = 105,
    STOBJ_64 = 106,
    STOBJ_OBJ = 107,
    LDOBJ_V = 108,
    LDOBJ_V_64 = 109,
    LDOBJ_V_OBJ = 110,
    STOBJ_V = 111,
    STOBJ_V_64 = 112,
    STOBJ_V_OBJ = 113,
    LDSTATIC = 114,
    LDSTATIC_64 = 115,
    LDSTATIC_OBJ = 116,
    STSTATIC = 117,
    STSTATIC_64 = 118,
    STSTATIC_OBJ = 119,
    RETURN = 120,
    RETURN_64 = 121,
    RETURN_OBJ = 122,
    RETURN_VOID = 123,
    THROW = 124,
    CHECKCAST = 125,
    ISINSTANCE = 126,
    CALL_SHORT = 127,
    CALL = 128,
    CALL_RANGE = 129,
    CALL_ACC_SHORT = 130,
    CALL_ACC = 131,
    CALL_VIRT_SHORT = 132,
    CALL_VIRT = 133,
    CALL_VIRT_RANGE = 134,
    CALL_VIRT_ACC_SHORT = 135,
    CALL_VIRT_ACC = 136,
    MOV_DYN = 137,
    LDA_DYN = 138,
    STA_DYN = 139,
    LDAI_DYN = 140,
    FLDAI_DYN = 141,
    RETURN_DYN = 142,
    CALLI_DYN_SHORT = 143,
    CALLI_DYN = 144,
    CALLI_DYN_RANGE = 145,
    FMOVI = 146,
    I32TOF64 = 147,
    UCMP = 148,
    NOT = 149,
    ECMA_LDNAN = 150,
    FLDAI = 151,
    U32TOF64 = 152,
    UCMP_64 = 153,
    NOT_64 = 154,
    ECMA_LDINFINITY = 155,
    FCMPL = 156,
    I64TOF64 = 157,
    DIVU2 = 158,
    AND2 = 159,
    ECMA_LDGLOBALTHIS = 160,
    FCMPG = 161,
    U64TOF64 = 162,
    DIVU2_64 = 163,
    AND2_64 = 164,
    ECMA_LDUNDEFINED = 165,
    FNEG = 166,
    F64TOI32 = 167,
    MODU2 = 168,
    OR2 = 169,
    ECMA_LDNULL = 170,
    FADD2 = 171,
    F64TOI64 = 172,
    MODU2_64 = 173,
    OR2_64 = 174,
    ECMA_LDSYMBOL = 175,
    FSUB2 = 176,
    F64TOU32 = 177,
    XOR2 = 178,
    ECMA_LDGLOBAL = 179,
    FMUL2 = 180,
    F64TOU64 = 181,
    XOR2_64 = 182,
    ECMA_LDTRUE = 183,
    FDIV2 = 184,
    I32TOU1 = 185,
    SHL2 = 186,
    ECMA_LDFALSE = 187,
    FMOD2 = 188,
    I64TOU1 = 189,
    SHL2_64 = 190,
    ECMA_THROWDYN = 191,
    I32TOF32 = 192,
    U32TOU1 = 193,
    SHR2 = 194,
    ECMA_TYPEOFDYN = 195,
    U32TOF32 = 196,
    U64TOU1 = 197,
    SHR2_64 = 198,
    ECMA_LDLEXENVDYN = 199,
    I64TOF32 = 200,
    I32TOI64 = 201,
    ASHR2 = 202,
    ECMA_POPLEXENVDYN = 203,
    U64TOF32 = 204,
    I32TOI16 = 205,
    ASHR2_64 = 206,
    ECMA_GETUNMAPPEDARGS = 207,
    F32TOF64 = 208,
    I32TOU16 = 209,
    XORI = 210,
    ECMA_GETPROPITERATOR = 211,
    F32TOI32 = 212,
    I32TOI8 = 213,
    AND = 214,
    ECMA_ASYNCFUNCTIONENTER = 215,
    F32TOI64 = 216,
    I32TOU8 = 217,
    OR = 218,
    ECMA_LDHOLE = 219,
    F32TOU32 = 220,
    I64TOI32 = 221,
    XOR = 222,
    ECMA_RETURNUNDEFINED = 223,
    F32TOU64 = 224,
    U32TOI64 = 225,
    SHL = 226,
    ECMA_CREATEEMPTYOBJECT = 227,
    F64TOF32 = 228,
    U32TOI16 = 229,
    SHR = 230,
    ECMA_CREATEEMPTYARRAY = 231,
    U32TOU16 = 232,
    ASHR = 233,
    ECMA_GETITERATOR = 234,
    U32TOI8 = 235,
    ECMA_THROWTHROWNOTEXISTS = 236,
    U32TOU8 = 237,
    ECMA_THROWPATTERNNONCOERCIBLE = 238,
    U64TOI32 = 239,
    ECMA_LDHOMEOBJECT = 240,
    U64TOU32 = 241,
    ECMA_THROWDELETESUPERPROPERTY = 242,
    ECMA_DEBUGGER = 243,
    ECMA_ADD2DYN = 244,
    ECMA_SUB2DYN = 245,
    ECMA_MUL2DYN = 246,
    ECMA_DIV2DYN = 247,
    ECMA_MOD2DYN = 248,
    ECMA_EQDYN = 249,
    ECMA_NOTEQDYN = 250,
    ECMA_LESSDYN = 251,
    ECMA_LESSEQDYN = 252,
    ECMA_GREATERDYN = 253,
    ECMA_GREATEREQDYN = 254,
    ECMA_SHL2DYN = 255,
    ECMA_SHR2DYN = 256,
    ECMA_ASHR2DYN = 257,
    ECMA_AND2DYN = 258,
    ECMA_OR2DYN = 259,
    ECMA_XOR2DYN = 260,
    ECMA_TONUMBER = 261,
    ECMA_NEGDYN = 262,
    ECMA_NOTDYN = 263,
    ECMA_INCDYN = 264,
    ECMA_DECDYN = 265,
    ECMA_EXPDYN = 266,
    ECMA_ISINDYN = 267,
    ECMA_INSTANCEOFDYN = 268,
    ECMA_STRICTNOTEQDYN = 269,
    ECMA_STRICTEQDYN = 270,
    ECMA_RESUMEGENERATOR = 271,
    ECMA_GETRESUMEMODE = 272,
    ECMA_CREATEGENERATOROBJ = 273,
    ECMA_THROWCONSTASSIGNMENT = 274,
    ECMA_GETTEMPLATEOBJECT = 275,
    ECMA_GETNEXTPROPNAME = 276,
    ECMA_CALLARG0DYN = 277,
    ECMA_THROWIFNOTOBJECT = 278,
    ECMA_ITERNEXT = 279,
    ECMA_CLOSEITERATOR = 280,
    ECMA_COPYMODULE = 281,
    ECMA_SUPERCALLSPREAD = 282,
    ECMA_DELOBJPROP = 283,
    ECMA_NEWOBJSPREADDYN = 284,
    ECMA_CREATEITERRESULTOBJ = 285,
    ECMA_SUSPENDGENERATOR = 286,
    ECMA_ASYNCFUNCTIONAWAITUNCAUGHT = 287,
    ECMA_THROWUNDEFINEDIFHOLE = 288,
    ECMA_CALLARG1DYN = 289,
    ECMA_COPYDATAPROPERTIES = 290,
    ECMA_STARRAYSPREAD = 291,
    ECMA_GETITERATORNEXT = 292,
    ECMA_SETOBJECTWITHPROTO = 293,
    ECMA_LDOBJBYVALUE = 294,
    ECMA_STOBJBYVALUE = 295,
    ECMA_STOWNBYVALUE = 296,
    ECMA_LDSUPERBYVALUE = 297,
    ECMA_STSUPERBYVALUE = 298,
    ECMA_LDOBJBYINDEX = 299,
    ECMA_STOBJBYINDEX = 300,
    ECMA_STOWNBYINDEX = 301,
    ECMA_CALLSPREADDYN = 302,
    ECMA_ASYNCFUNCTIONRESOLVE = 303,
    ECMA_ASYNCFUNCTIONREJECT = 304,
    ECMA_CALLARGS2DYN = 305,
    ECMA_CALLARGS3DYN = 306,
    ECMA_DEFINEGETTERSETTERBYVALUE = 307,
    ECMA_NEWOBJDYNRANGE = 308,
    ECMA_CALLIRANGEDYN = 309,
    ECMA_CALLITHISRANGEDYN = 310,
    ECMA_SUPERCALL = 311,
    ECMA_CREATEOBJECTWITHEXCLUDEDKEYS = 312,
    ECMA_DEFINEFUNCDYN = 313,
    ECMA_DEFINENCFUNCDYN = 314,
    ECMA_DEFINEGENERATORFUNC = 315,
    ECMA_DEFINEASYNCFUNC = 316,
    ECMA_DEFINEMETHOD = 317,
    ECMA_NEWLEXENVDYN = 318,
    ECMA_COPYRESTARGS = 319,
    ECMA_CREATEARRAYWITHBUFFER = 320,
    ECMA_CREATEOBJECTHAVINGMETHOD = 321,
    ECMA_THROWIFSUPERNOTCORRECTCALL = 322,
    ECMA_CREATEOBJECTWITHBUFFER = 323,
    ECMA_LDLEXVARDYN = 324,
    ECMA_STLEXVARDYN = 325,
    ECMA_DEFINECLASSWITHBUFFER = 326,
    ECMA_IMPORTMODULE = 327,
    ECMA_STMODULEVAR = 328,
    ECMA_TRYLDGLOBALBYNAME = 329,
    ECMA_TRYSTGLOBALBYNAME = 330,
    ECMA_LDGLOBALVAR = 331,
    ECMA_STGLOBALVAR = 332,
    ECMA_LDOBJBYNAME = 333,
    ECMA_STOBJBYNAME = 334,
    ECMA_STOWNBYNAME = 335,
    ECMA_LDSUPERBYNAME = 336,
    ECMA_STSUPERBYNAME = 337,
    ECMA_LDMODVARBYNAME = 338,
    ECMA_CREATEREGEXPWITHLITERAL = 339,
    ECMA_ISTRUE = 340,
    ECMA_ISFALSE = 341,
    ECMA_STCONSTTOGLOBALRECORD = 342,
    ECMA_STLETTOGLOBALRECORD = 343,
    ECMA_STCLASSTOGLOBALRECORD = 344,
    ECMA_STOWNBYVALUEWITHNAMESET = 345,
    ECMA_STOWNBYNAMEWITHNAMESET = 346,
    ECMA_LDFUNCTION = 347
}
export declare function getInstructionSize(opcode: IRNodeKind): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 9 | 7;
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
export declare class FormatItem {
    readonly kind: OperandKind;
    readonly bitwidth: number;
    constructor(kind: OperandKind, bitwidth: number);
}
export declare type Format = FormatItem[];
export declare abstract class IRNode {
    readonly kind: IRNodeKind;
    readonly mnemonic: string;
    readonly operands: OperandType[];
    readonly formats: Format[];
    private node;
    constructor(kind: IRNodeKind, mnemonic: string, operands: OperandType[], formats: Format[]);
    debugPosInfo: DebugPosInfo;
    abstract resultType(): ResultType;
    abstract resultIn(): ResultDst;
    toString(): string;
    setNode(node: ts.Node | NodeKind): void;
    getNodeName(): string;
}
export declare abstract class Intrinsic extends IRNode {
    readonly kind: IRNodeKind;
    readonly mnemonic: string;
    readonly operands: OperandType[];
    readonly formats: Format[];
    slotSize: number;
    constructor(kind: IRNodeKind, mnemonic: string, operands: OperandType[], formats: Format[]);
    toString(): string;
    hasIC(): boolean;
    updateICOffset(base: number): number;
    validateIC(offset: number, slotSize: number): number;
}
export declare class VReg {
    private static global_id;
    readonly id: number;
    num: number;
    private stacktrace;
    toString(): string;
    constructor();
    getStackTrace(): (undefined | string);
    setStackTrace(stack?: null): void;
}
export declare class Imm extends IRNode {
    private type;
    readonly value: number;
    constructor(type: ResultType, value: number);
    static zero(): Imm;
    static one(): Imm;
    resultType(): ResultType;
    resultIn(): ResultDst;
    toString(): string;
}
export declare class Label extends IRNode {
    private static global_id;
    readonly id: number;
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
    toString(): string;
}
export declare class DebugInsPlaceHolder extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Nop extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mov extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovObj extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Movi extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MoviWide extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FmoviWide extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovNull extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Lda extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldai extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaiWide extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FldaiWide extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaStr extends IRNode {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaConst extends IRNode {
    constructor(v: VReg, literalarray_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaType extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaNull extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sta extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StaWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StaObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CmpWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FcmplWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FcmpgWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Jmp extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JeqObj extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JneObj extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JeqzObj extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class JnezObj extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jeqz extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jnez extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jltz extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jgtz extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jlez extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jgez extends IRNode {
    constructor(imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jeq extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jne extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jlt extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jgt extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jle extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class Jge extends IRNode {
    constructor(v: VReg, imm: Label);
    resultType(): ResultType;
    resultIn(): ResultDst;
    getTarget(): Label;
}
export declare class FnegWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Neg extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NegWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fadd2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fsub2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmul2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fdiv2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmod2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Addi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Subi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Muli extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Andi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ori extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shli extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shri extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashri extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Divi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Modi extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Add extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Sub extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mul extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Div extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Mod extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Inci extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarr8 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarru8 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarr16 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarru16 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldarr extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdarrWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fldarr32 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FldarrWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdarrObj extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Starr8 extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Starr16 extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Starr extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StarrWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fstarr32 extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FstarrWide extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StarrObj extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Lenarr extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Newarr extends IRNode {
    constructor(v1: VReg, v2: VReg, type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Newobj extends IRNode {
    constructor(v: VReg, type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class InitobjShort extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Initobj extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, v4: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class InitobjRange extends IRNode {
    constructor(method_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldobj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjWide extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjObj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Stobj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjWide extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjObj extends IRNode {
    constructor(v: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjV extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjVWide extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdobjVObj extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjV extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjVWide extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StobjVObj extends IRNode {
    constructor(v1: VReg, v2: VReg, field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ldstatic extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdstaticWide extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdstaticObj extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ststatic extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StstaticWide extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StstaticObj extends IRNode {
    constructor(field_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Return extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnObj extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnVoid extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Throw extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Checkcast extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Isinstance extends IRNode {
    constructor(type_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallShort extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Call extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallRange extends IRNode {
    constructor(method_id: string, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallAccShort extends IRNode {
    constructor(method_id: string, v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallAcc extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirtShort extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirt extends IRNode {
    constructor(method_id: string, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirtRange extends IRNode {
    constructor(method_id: string, v?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirtAccShort extends IRNode {
    constructor(method_id: string, v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CallVirtAcc extends IRNode {
    constructor(method_id: string, v1: VReg, v2: VReg, v3: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class MovDyn extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaDyn extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class StaDyn extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class LdaiDyn extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class FldaiDyn extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class ReturnDyn extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliDynShort extends IRNode {
    constructor(imm: Imm, v1?: VReg, v2?: VReg, v3?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliDyn extends IRNode {
    constructor(imm: Imm, v1?: VReg, v2?: VReg, v3?: VReg, v4?: VReg, v5?: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class CalliDynRange extends IRNode {
    constructor(imm: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmovi extends IRNode {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ucmp extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Not extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdnan extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fldai extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class UcmpWide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class NotWide extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdinfinity extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fcmpl extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I64tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Divu2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdglobalthis extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fcmpg extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U64tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Divu2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdundefined extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fneg extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64toi32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Modu2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdnull extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fadd2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Modu2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdsymbol extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fsub2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64tou32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdglobal extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmul2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64tou64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdtrue extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fdiv2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32tou1 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdfalse extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Fmod2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I64tou1 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowdyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32tof32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32tou1 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaTypeofdyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32tof32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U64tou1 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdlexenvdyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I64tof32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr2 extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaPoplexenvdyn extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U64tof32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32toi16 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr2Wide extends IRNode {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGetunmappedargs extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F32tof64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32tou16 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xori extends IRNode {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGetpropiterator extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F32toi32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32toi8 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class And extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAsyncfunctionenter extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F32toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I32tou8 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Or extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdhole extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F32tou32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class I64toi32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Xor extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaReturnundefined extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F32tou64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32toi64 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shl extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateemptyobject extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class F64tof32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32toi16 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Shr extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateemptyarray extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32tou16 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class Ashr extends IRNode {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGetiterator extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32toi8 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowthrownotexists extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U32tou8 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowpatternnoncoercible extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U64toi32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdhomeobject extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class U64tou32 extends IRNode {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowdeletesuperproperty extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDebugger extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAdd2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaSub2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaMul2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDiv2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaMod2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaEqdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaNoteqdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLessdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLesseqdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGreaterdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGreatereqdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaShl2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaShr2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAshr2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAnd2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaOr2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaXor2dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaTonumber extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaNegdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaNotdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaIncdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDecdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaExpdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaIsindyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaInstanceofdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStrictnoteqdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStricteqdyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaResumegenerator extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGetresumemode extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreategeneratorobj extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowconstassignment extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGettemplateobject extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGetnextpropname extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallarg0dyn extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowifnotobject extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaIternext extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCloseiterator extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCopymodule extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaSupercallspread extends Intrinsic {
    constructor(v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDelobjprop extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaNewobjspreaddyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateiterresultobj extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaSuspendgenerator extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAsyncfunctionawaituncaught extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowundefinedifhole extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallarg1dyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCopydataproperties extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStarrayspread extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaGetiteratornext extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaSetobjectwithproto extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdobjbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStobjbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStownbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdsuperbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStsuperbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdobjbyindex extends Intrinsic {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStobjbyindex extends Intrinsic {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStownbyindex extends Intrinsic {
    constructor(v: VReg, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallspreaddyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAsyncfunctionresolve extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaAsyncfunctionreject extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallargs2dyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallargs3dyn extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg, v4: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefinegettersetterbyvalue extends Intrinsic {
    constructor(v1: VReg, v2: VReg, v3: VReg, v4: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaNewobjdynrange extends Intrinsic {
    constructor(imm: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallirangedyn extends Intrinsic {
    constructor(imm: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCallithisrangedyn extends Intrinsic {
    constructor(imm: Imm, v: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaSupercall extends Intrinsic {
    constructor(imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateobjectwithexcludedkeys extends Intrinsic {
    constructor(imm: Imm, v1: VReg, v2: VReg[]);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefinefuncdyn extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefinencfuncdyn extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefinegeneratorfunc extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefineasyncfunc extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefinemethod extends Intrinsic {
    constructor(method_id: string, imm: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaNewlexenvdyn extends Intrinsic {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCopyrestargs extends Intrinsic {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreatearraywithbuffer extends Intrinsic {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateobjecthavingmethod extends Intrinsic {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaThrowifsupernotcorrectcall extends Intrinsic {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateobjectwithbuffer extends Intrinsic {
    constructor(imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdlexvardyn extends Intrinsic {
    constructor(imm1: Imm, imm2: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStlexvardyn extends Intrinsic {
    constructor(imm1: Imm, imm2: Imm, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaDefineclasswithbuffer extends Intrinsic {
    constructor(method_id: string, imm1: Imm, imm2: Imm, v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaImportmodule extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStmodulevar extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaTryldglobalbyname extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaTrystglobalbyname extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdglobalvar extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStglobalvar extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdobjbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStobjbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStownbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdsuperbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStsuperbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdmodvarbyname extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaCreateregexpwithliteral extends Intrinsic {
    constructor(string_id: string, imm: Imm);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaIstrue extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaIsfalse extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStconsttoglobalrecord extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStlettoglobalrecord extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStclasstoglobalrecord extends Intrinsic {
    constructor(string_id: string);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStownbyvaluewithnameset extends Intrinsic {
    constructor(v1: VReg, v2: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaStownbynamewithnameset extends Intrinsic {
    constructor(string_id: string, v: VReg);
    resultType(): ResultType;
    resultIn(): ResultDst;
}
export declare class EcmaLdfunction extends Intrinsic {
    constructor();
    resultType(): ResultType;
    resultIn(): ResultDst;
}
//# sourceMappingURL=irnodes.d.ts.map