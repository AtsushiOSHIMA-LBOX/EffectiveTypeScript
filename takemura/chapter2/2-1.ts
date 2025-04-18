// neverと推論される
const neverException = () => {
    throw new Error("neverException");
};
// 別にvoidでもエラーにならない
const voidException = (): void => {
    throw new Error("voidException");
};

// neverと推論される
const neverLoop = () => {
    while (true) {
        // do nothing
    }
}
// 別にvoidでもエラーにならない
const voidLoop = (): void => {
    while (true) {
        // do nothing
    }
}
