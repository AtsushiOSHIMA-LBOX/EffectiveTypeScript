// NG（declareは元が関数なら関数式にできない）
// export declare const greet: (name: string) => string;

// OK
export declare function greet(name: string): string;
// OK（元が関数式なら関数式にできる）
export declare const greet2: (name: string) => string;