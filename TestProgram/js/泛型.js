"use strict";
//  泛型
// use 类型推断
function identity(arg) {
    return arg;
}
let myIdentity = identity;
function identity1(arg) {
    return arg;
}
let myIdentity1 = identity1;
// 泛型类
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// 在泛型里使用类类型：
// 使用原型属性推断并约束构造函数与类实例的关系
// 作用？？
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'zoo';
    }
}
class Animal1 {
    constructor() {
        this.numLegs = 1;
    }
}
class Bee extends Animal1 {
    constructor() {
        super();
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal1 {
    constructor() {
        super();
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper.nametag);
;
console.log(createInstance(Bee).keeper.hasMask);
