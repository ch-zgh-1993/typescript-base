"use strict";
// 枚举
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
// 字符串枚举
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right1";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
// 计算和常量
// 常量在编译时会进行计算，计算的值直到运行时才知道值。
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
let directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// 内联
var Foo1;
(function (Foo1) {
    Foo1[Foo1["X"] = 4] = "X";
})(Foo1 || (Foo1 = {}));
var y = Foo1.X;
// 外部枚举:  为什么没有编译？
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 1] = "A";
    Enum1[Enum1["B"] = 2] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
console.log(Enum1);
