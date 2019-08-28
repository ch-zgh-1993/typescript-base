"use strict";
// 类
// 类及属性
class Animal {
    constructor(theName) {
        this.age = 10;
        this.sex = 'man';
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
        console.log(this.sex);
        // console.log(this.age);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python');
let tom = new Horse('Tommy the Palomino');
// console.log(sam.age);
sam.move();
// console.log(sam.sex);
tom.move(34);
// 参数属性：
class Octopus {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
// get/set
let passcode = 'secret passcode';
class Employee {
    constructor() {
        this._fullName = '';
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}
let employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    // alert(employee.fullName);
}
// 抽象类
// 方法在声明的抽象类中不存在。
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports();
// 高级技巧
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }
// let greeter: Greeter;
// greeter = new Greeter();
// console.log(greeter.greet());
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";
// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());
// 把类当作接口
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point3d = { x: 1, y: 2, z: 3 };
