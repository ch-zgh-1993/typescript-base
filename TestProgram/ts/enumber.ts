// 枚举

// 数字枚举
enum Direction {
	Up = 1,
	Down,
	Left,
	Right
}
console.log(Direction.Down)

// 字符串枚举
enum Direction1 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right1'
}
console.log(Direction1);

// 计算和常量
// 常量在编译时会进行计算，计算的值直到运行时才知道值。
enum FileAccess {
	// constant members
	None,
	Read = 1 << 1,
	Write = 1 << 2,
	ReadWrite = Read | Write,
	// computed member
	G = '123'.length,
}

// const 枚举
const enum Direction2 {
	Up,
	Down,
	Left,
	Right
}
let directions = [Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right]
// 内联
enum Foo1 {
	X = 4,
}
var y = Foo1.X


// 外部枚举:  为什么没有编译？
enum Enum1 {
	A = 1,
	B,
	C = 2
}
console.log(Enum1)

declare enum Foo {
    X, // Computed
    Y = 2, // Non-computed
    Z, // Computed! Not 3! Careful!
    Q = 1 + 1 // Error
}
