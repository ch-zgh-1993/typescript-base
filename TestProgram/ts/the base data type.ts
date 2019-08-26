// 基础的不谈：
// 	Boolean, Number, String, 


// Array:  数组泛型。
let arr: number[] = [1, 2, 3];
let list: Array<object> = [{name: 'zgh'}];
console.log(arr);


// Tuple: 元组: 不能访问越界元素。
let tuple1: [string, number];
tuple1 = ['hello', 10];
// tuple1[2] = true;
console.log(tuple1);

// enum: 枚举: 
enum Color {Red, Green, Blue}
console.log(Color.Green);
console.log(Color[2]);

// Any: 
let notSure: any = 4;
try {
	notSure.ifItExists();
} catch {
	console.log('notSure 不存在该方法');
}
console.log(notSure.toFixed());

let prettySure: Object = 4;
// prettySure.toFixed(); 报错。


// Void: 只能用于 undefined, 	不能用于 null.
function warnUser(): void {
	console.log('');
}
let unusable: void = undefined;
// unusable = null;

// null, undefined;  null 和 undefined 不能赋值给其他类型。
// let num: number = undefined;

// never:
function error(msg: string): never {
	throw new Error(msg);
}	
function fail() {
	return error('something failed');
}
function infiniteLoop(): never{
	while(true){

	}
}

// object: 

declare function create(o: object | null): void;


// 类型断言: 

let someValue: any = 'this is a string';
let strlength: number = (<string>someValue).length;
strlength = (someValue as string).length;