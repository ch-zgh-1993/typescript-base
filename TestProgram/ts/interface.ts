// 接口的作用就是为类型命名和你的代码或第三方代码定义契约。

interface Fly {
	tool: string,
	readonly toolCount: number;
	toolColor?: string;
}

function AnimalFly(fly: Fly) {
	console.log(fly.tool);
}

let bird = {
	tool: '翅膀',
	toolCount: 2,
	toolColir: 'blue',
};
AnimalFly(bird);
// bird.toolCount = 3;


// 额外的属性检查：当一个对象字面量，存在任何目标类型不包含的属性时，会得到一个错误。

interface SquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number} {

	return {
		color: 'ss',
		area: 10
	}

}
let mySquare = createSquare({colour: 'red', width: 100})


// 函数类型： 

interface SearchFunc {
	(source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string):boolean {
	let result = src.search(sub);
	return result > -1;
}

let mySearch1: SearchFunc;
mySearch1 = function(src, sub) {
	let result = src.search(sub);
	return result > -1;
}

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


