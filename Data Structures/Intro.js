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
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

let firstStudent = new Student("Philip", "Smalls")
let firstStudent = new Student("Lil", "Giant")

// first we define the blueprint (class),
// we create new instances using the new keyword
// then pass in firstName and lastName: "Smalls", "Philip" and "Giant", "Lil"
