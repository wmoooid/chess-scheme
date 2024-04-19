export type RequireOne<T> = T & { [P in keyof T]: Required<Pick<T, P>> }[keyof T];

export type Prettify<T> = { [K in keyof T]: T[K] } & object;

export type ArrayToTuple<T extends ReadonlyArray<string>, V = string> = keyof {
    [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};
