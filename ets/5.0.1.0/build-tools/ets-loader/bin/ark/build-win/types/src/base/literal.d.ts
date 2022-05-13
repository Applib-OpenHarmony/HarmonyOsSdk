export declare enum LiteralTag {
    BOOLEAN = 1,
    INTEGER = 2,
    DOUBLE = 4,
    STRING = 5,
    METHOD = 6,
    GENERATOR = 7,
    ACCESSOR = 8,
    METHODAFFILIATE = 9,
    NULLVALUE = 255
}
export declare class Literal {
    private t;
    private v;
    constructor(t: LiteralTag, v: any);
    getTag(): LiteralTag;
    getValue(): any;
}
export declare class LiteralBuffer {
    private lb;
    constructor();
    addLiterals(...literals: Array<Literal>): void;
    getLiterals(): Literal[];
    isEmpty(): boolean;
    getLiteral(index: number): Literal;
}
//# sourceMappingURL=literal.d.ts.map