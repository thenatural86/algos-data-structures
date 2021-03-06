// Objectives
// Define what a singly linked list is
// Compare and contrast linked list with arrays
// Implement insertion, removal and traversal methods on Singly Lined Lists

// What is a linked list?

// Data structure that contains a head, tail and length property
// Each element is a node
// Consists of nodes and each node has a value and a pointer to another node or null

// A bunch of nodes that point to the next one
// Single because each note is connect in only one direction to the next node

// Comparison with Arrays

// List
// Don't have indexes
// Connected via nodes with a next pointer
// Random access is not allowed
// Main reason to use a linked list is for insertion/deletion

// Arrays
// Indexed in order
// Insertion and deletion can be expensive
// Can be quickly accessed at a specific index

// Starter Code and Push Intro
// A node:
//  stores a piece of data - val
//  stores a reference to the next node - next

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// do not initialize with any args, rather define with
// a pointer to head, pointer to tail and a length
//  work on adding many methods to SinglyLinkedList class

// .push()
// takes a piece of data create a new Node and assign it to
// the head and tail of the list. Assigned to both when list
// is empty (80).
// Next we take the head and have its next
// property point to the next node and set tail to be (81)
// then take current tail and have it point to (85), then
// update that to be the tail.

// push()
// adding a new Node to the end of the Linked List

// function should accept a value
// create a new node using the value passed into the
// function
// If there is no head property on the list, set the head
// and the tail to be the newly created node
// Otherwise set the next property on the tail to be the
// new node and set the tail property on the list
// to be the newly created node
// Increment the length by one

// pop()
// popping is removing a node from the end of Linked List

// to remove tail, we must assign a new tail
// by starting at beginning and going through list until
// end and making the last node the new tail
// first thing we need to be able to do is traverse
// the list

// Pseudo
// if there are no nodes in the list, return undefined
// loop through the list until you reach the tail
// set the next property of the 2nd to last node to be
// null
// set the tail to be the 2nd to last node
// decrement the length of the list by 1
// return the value of the node removed

// shift()
// shifting is removing a new node from the beginning of the Linked List

// if there ar no nodes, return undefined
// store the current head property in a variable
// set the head property to be the current head's next property
// decrement the length by 1
// return the value of the node removed

// unshift()
// adding a new node the beginning of the LL

// accepts a value
// create a new node using the value passed to the function
// if there is no head property on the list, set the head and tail
// to be the newly created node
// otherwise set the newly created nodes next property to be the
// current head property on the list
// set the head property on the list to be the newly created node
// increment the length of list by 1
// return LL

// get()
// retrieve a node by it's position in the linked list

// should accept an index
// if the index is less than zero or greater than or equal to the
// length of the of the list, return null
// loop through the list until you reach the index and return the
// node at that specific index

// set()
// changing the value of a node based on it's position in the LL

// accept an index and value
// use get method to find the specific node
// if the node is not found return false
// if node is found, set the value of that node to be the value
// passed to the function and return true

// insert()
// adding a node to the LL at a specific position

// if the index is less than zero or greater than the length,
// return false
// if the index is the same as the length, push a new node to
// the end of the list
// if the index is 0, unshift a new node to the start of the list
// otherwise, using the get method, access the node at
// the index -1
// set the next property on that node to be the new node
// set the next property on the new node to be the previous next
// increment the length
// return true

// remove()
// removing a node from the LL at a specific position

// if the index is less than zero or greater than the length
// return undefined
// if the index if the same as the length - 1, pop
// if the index is zero, shift
// otherwise, using the get method, access the node at
// the index - 1
// set the next property on that node to be the next of the
// next node
// decrement the length
// return the value of the removed node

// reverse()
// reverse the ll in place

// swap the head and the tail
// create next variable
// create previous variable
// create node variable and initialize to the head property
// loop through list
// set next to be the next property on whatever node is
// set the next property on the node to be whatever previous is
// set previous to be the value of the node variable
// set the node variable to be the value of the next variable
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    // variables for iterator that will reach the end of list
    // and what will become the new tail
    let current = this.head
    let newTail = current
    // while there is another node after current run loop
    while (current.next) {
      // set newTail to equal current and then move current forward one
      newTail = current
      current = current.next
    }
    // set newTail as this.tail
    this.tail = newTail
    // set the next property of this.next to null
    this.tail.next = null
    // decrement the length of this by 1
    this.length--
    // check if list is empty reset head and tail to null
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = current.next
    this.length--
    return current
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
    }
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== idx) {
      current = current.next
      counter++
    }
    return current
  }

  set(idx, val) {
    foundNode = this.get(idx)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === this.length) return !!this.push(val)
    if (idx === 0) return !!this.unshift(val)

    let newNode = new Node(val)
    let previous = this.get(idx - 1)
    let temp = previous.next
    previous.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()

    const previousNode = this.get(idx - 1)
    const removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")

// Big O
// Insertion - O(1)
// Removal - O(1) or O(n)
// Searching - O(n)
// Access - O(n)

// Recap

// Singly Linked List are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
// Arrays contain a built in index where as linked list do not
// The idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues
