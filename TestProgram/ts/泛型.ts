//  泛型


// use 类型推断

function identity<T>(arg: T): T {
	return arg
}
let myIdentity: <U>(arg: U) => U = identity;

// 泛型接口

interface GenericIdentityFn<T> {
	(arg: T): T;
}

function identity1<T>(arg: T): T {
	return arg;
}
let myIdentity1: GenericIdentityFn<number> = identity1;


// 泛型类

class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y){return x + y};


// 在泛型里使用类类型：
// 使用原型属性推断并约束构造函数与类实例的关系
// 作用？？

class BeeKeeper {
	hasMask: Boolean;
	constructor(){
		this.hasMask = true;
	}
}

class ZooKeeper {
	nametag: string;
	constructor() {
		this.nametag = 'zoo';
	}
}
class Animal1 {
	numLegs: number;
	constructor() {
		this.numLegs = 1;
	}
}
class Bee extends Animal1 {
	keeper: BeeKeeper;
	constructor() {
		super();
		this.keeper = new BeeKeeper();
	}
}
class Lion extends Animal1 {
	keeper: ZooKeeper;
	constructor() {
		super();
		this.keeper = new ZooKeeper();
	}
}

function createInstance<A extends Animal1>(c: new() => A): A{
	return new c();
}

console.log(createInstance(Lion).keeper.nametag);;
console.log(createInstance(Bee).keeper.hasMask);