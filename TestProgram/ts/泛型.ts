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