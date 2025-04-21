type Options = {
    title: string;
    darkMode?: boolean;
}

function createWindow(options: Options): void {
    if (options.darkMode) {
        console.log('dark mode');
    }
}

// NG
createWindow({title: 'object', darkmode: true});
// NG
const options: Options = {title: 'object', darkmode: true};
// OK(構造的型付け)
const invalidOptions = {title: 'object', darkmode: true};
createWindow(invalidOptions);

// OK(オブジェクトリテラルではない)
const documentObject: Options = document;
