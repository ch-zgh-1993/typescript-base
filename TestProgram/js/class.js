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
