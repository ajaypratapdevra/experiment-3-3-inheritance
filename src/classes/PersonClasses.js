// src/classes/PersonClasses.js

// 1. Base Class
export class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.role = "General Person"; // Default role
  }

  // Method to be overridden
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  // Common method for all
  sayHello() {
    return `Hello, I am ${this.name}.`;
  }
}

// 2. Student Subclass (Extends Person)
export class Student extends Person {
  constructor(name, age, email, studentId, major) {
    super(name, age, email); // Call the parent constructor
    this.studentId = studentId;
    this.major = major;
    this.role = "Student";
  }

  // Overriding the getDetails method
  getDetails() {
    return `ID: ${this.studentId} | Major: ${this.major}`;
  }
}

// 3. Teacher Subclass (Extends Person)
export class Teacher extends Person {
  constructor(name, age, email, subject, salary) {
    super(name, age, email);
    this.subject = subject;
    this.salary = salary;
    this.role = "Teacher";
  }

  // Overriding the getDetails method
  getDetails() {
    return `Subject: ${this.subject} | Salary: $${this.salary}`;
  }
}