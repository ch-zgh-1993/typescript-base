"use strict";
// 接口的作用就是为类型命名和你的代码或第三方代码定义契约。
function AnimalFly(fly) {
    console.log(fly.tool);
}
let bird = {
    tool: '翅膀',
    toolCount: 2,
    toolColir: 'blue',
};
AnimalFly(bird);
function createSquare(config) {
    return {
        color: 'ss',
        area: 10
    };
}
let mySquare = createSquare({ colour: 'red', width: 100 });
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let mySearch1;
mySearch1 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
// 可索引的类型: 这里类的问题随后再说。
// class Animal {
// 	name: string;
// 	constructor() {
// 	}
// }
// class Dog extends Animal {
// 	breed: string;
// }
// interface NotOkay {
// 	[x: number]: Dog;
// 	[x: string]: Animal;
// }
// let notOkay: NotOkay = {
// }
// 类类型
// 继承接口
// 混合类型
// 接口继承类
