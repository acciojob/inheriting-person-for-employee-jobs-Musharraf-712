// Define the Person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define Employee class that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor to set name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit from Person prototype
Employee.prototype = Object.create(Person.prototype);

// Reset constructor to Employee
Employee.prototype.constructor = Employee;

// Add jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change this line
window.Person = Person;
window.Employee = Employee;
