"use strict";
// 基础的不谈：
// 	Boolean, Number, String, 
// Array:  数组泛型。
let arr = [1, 2, 3];
let list = [{ name: 'zgh' }];
console.log(arr);
// Tuple: 元组: 不能访问越界元素。
let tuple1;
tuple1 = ['hello', 10];
// tuple1[2] = true;
console.log(tuple1);
// enum: 枚举: 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Green);
console.log(Color[2]);
// Any: 
let notSure = 4;
try {
    notSure.ifItExists();
}
catch (_a) {
    console.log('notSure 不存在该方法');
}
console.log(notSure.toFixed());
let prettySure = 4;
// prettySure.toFixed(); 报错。
// Void: 只能用于 undefined, 	不能用于 null.
function warnUser() {
    console.log('');
}
let unusable = undefined;
// unusable = null;
// null, undefined;  null 和 undefined 不能赋值给其他类型。
// let num: number = undefined;
// never:
function error(msg) {
    throw new Error(msg);
}
function fail() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
// 类型断言: 
let someValue = 'this is a string';
let strlength = someValue.length;
strlength = someValue.length;
