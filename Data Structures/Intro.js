// What do they do?
// Data structures are collections of values, the relationship among them and the functions or operations that can be applied to the data

// Why so many?
// Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

// Why care
// The more time I spend as a developer the more likely I will need to use one of these data structures
// I've unknowingly worked with many data structures already
// Interviews

// There is no one best DS, they all excel in different situations
// Example: Working with map location data - use a Graph!
// Example: Need an ordered list with fast inserts/removals at the beginning/end? - use a Linked List!
// Example: Web scraping nested HTML? - use a Tree!
// Example: Need to write a scheduler? - use a Binary Heap!

// ES 2015 CLASS SYNTAX
// JavaScript doesn't really support OOP, however with ES2015 a new Class keyword was introduced and it makes it easy for us to define out DS

// Objectives
// Explain what a class is
// Understand how JS implements the IDEA of classes
// Define terms like abstraction, encapsulation, and polymorphism
// use ES2015 classes to implement DS

// What is a class?
// A class is a blueprint for creating objects with predefined properties and methods
// this class syntax is syntactical sugar over JavaScripts pre-existing prototypal or prototype based inheritance

// The Syntax

class Student {
  // every student will have a firstName and lastName
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

// The method to create new objects must be called constructor
// the class keyword creates a constant, so you cannot redefine it.
// classes should start out with a capital letter

// constructor is used to instantiate new Student instances
// whatever is passed in when a new Student is created, assign those properties to the individual object (individual Student)

// Creating Objects from Classes
class Student {
  // every student will have a firstName and lastName
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.year = year
    this.tardies = 0
    this.scores = []
  }
  static enrollStudent(...students) {
    // exicute some code with students
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies += 1
    if (this.tardies >= 3) {
      return "You're outta here!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b
    })
    return sum / this.scores.length
  }
}

let firstStudent = new Student("Philip", "Smalls", 3)
let secondStudent = new Student("Lil", "Giant", 4)

// first we define the blueprint (class),
// we create new instances using the new keyword
// then pass in firstName and lastName: "Smalls", "Philip" and "Giant", "Lil"

// when inside a constructor, "this" refers to the individual instance of a class

// Instance Methods

// methods that provide functionality that pertains to a single instance of a class
// not for the class or blueprint level but work on the individual instances
// these methods are used as an interface to the data and operate on individual instances

// Class Methods
// make class methods by using the static keyword in front of the method definition
// static methods are called without instantiating their class and cannot be called through a class instance
// allows us to define functionality that is pertinent to classes but not necessarily to individual instances of that class
// often used to create utility functions for an application
// called on class Student.enrollStudent()

// Inside all our instance methods and constructor, the keyword this refers to the object that is created from that class (also known as an instance)

// RECAP
// Classes are blueprints that when created make objects known as instances
// Classes are created with the new keyword
// The constructor function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the static keyword
