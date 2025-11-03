// complete this js code
class Person{
	constructor(name,age){
		this.Name = name,
			this.Age = age
	}
	greet(){
		console.log(`Hello, my name is ${this.Name}, I am ${this.age} years old`)
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
		this.jobTitle = jobTitle
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}
const persosn = new Person("Alice",25);
Person.greet();

const employee = new Employee("Bob",30,"Manager");
employee.jobGreat();
employee.gteet()


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
