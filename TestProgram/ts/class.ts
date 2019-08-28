// 类

// 类及属性
class Animal {
	name: string;
	private age: number;
	protected sex: string;
	constructor(theName: string) {
		this.age = 10;
		this.sex = 'man';
		this.name = theName;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal {
	constructor(name: string) {
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
	
	constructor(name: string) {
		super(name);
	}

	move(distanceInMeters = 45) {
		console.log('Galloping...');
		super.move(distanceInMeters);
	}
}

let sam = new Snake('Sammy the Python')
let tom: Animal = new Horse('Tommy the Palomino')

// console.log(sam.age);
sam.move();
// console.log(sam.sex);
tom.move(34);

// 参数属性：
class Octopus {

	readonly numberOfLegs: number = 8;
	constructor(readonly name: string) {

	}
}


// get/set
let passcode = 'secret passcode';
class Employee {
	private _fullName: string;

	constructor() {
		this._fullName = '';
	}

	get fullName(): string {
		return this._fullName;
	}
	set fullName(newName: string) {
		if(passcode && passcode == 'secret passcode') {
			this._fullName = newName;
		}else {
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
abstract class Department {
	constructor(public name: string) {}
	printName(): void {
		console.log('Department name: ' + this.name);
	}
	abstract printMeeting(): void; // 抽象方法
}
class AccountingDepartment extends Department {
	constructor() {
		super('Accounting and Auditing');
	}
	printMeeting(): void {
		console.log('The Accounting Department meets each Monday at 10am');
	}
	generateReports(): void {
		console.log('Generating accounting reports...');
	}
}	
let department: Department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports();
