const obj1 = {
    name: 'apple',
    prop: {
        color: 'red',
        quantity: 1
    }
};

const obj2: typeof obj1 = {

}; // NG わざわざinterfaceを使わなくても、typeofで使いまわせる