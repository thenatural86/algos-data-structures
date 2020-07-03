// Objectives

// Construct doubly linked list
// Compare and contrast doubly and singly linked lists
// Implement basic operations on DLL

// DLL
// Almost identical to SLL
// Except DLL has a pointer to the next node AND the previous node

// Comparisons with SLL
// more memory === more flexibility

// Node
// val
// next
// prev

// DoublyLinkedList
// head
// tail
// length

// push()
// Adding a node to the end of a DLL

// create a new node with the value passed to the function
// if the head property is null set the head and tail to be the newly created node
// if not, set the next property on the tail to be that node
// set the previous property in the newly created node to be the tail
// set the tail to be the newly created node
// increment the length
// return the DLL

// pop()
// Removing a node from the end of a DLL

// if there is no head return undefined
// store the current tail in a variable to return later
// if the length is 1 set the head and tail to be null
// update the tail to be the previous Node
// set the new tail's next null
// decrement the length
// return the value removed

// shift()
// removing a node from the beginning of DLL

// if there is no head/ length is 0 return undefined
// store the current head property in a variable
// if the length is one
// set the old head to be null
// set the tail to be null
// update the head to be the next of the old head
// set the heads prev property to null
// set the old heads next to null
// decrement the length
// return the old head

// unshift()
// adding a node to the beginning of DLL

// create a new node with the value passed to the function
// if the length is 0
// set the head to be the new node
// set the tail to be the new node
// otherwise
// set the prev property on the head of the list to be the new node
// set the next property on the new node to be head property
// update the head to be the new node
// increment the length
// return the list

// get()
// accessing a node in DLL by its position

// if the index is less than 0 or greater or equal to the length return null
// if the index is less than or equal to half the length of the list
// loop through the list starting from the head and loop towards the middle
// return the node once it is found
// if the index is greater than half the length of the list
// loop through the list starting from the tail and loop towards the middle
// return the node once it's found

// set()
// replacing the value of a node based on its position in  DLL

// create a variable which is the result of the get method at the index passed to the function
// if the get method returns a valid node, set the value of that node to be the value passed to the function
// return true
// otherwise return false

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
      this.length--
      return oldHead
    }
  }
  unshift(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return newNode
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    if (idx <= this.length / 2) {
      let counter = 0
      let current = this.head
      while (counter !== idx) {
        current = current.next
        counter++
      }
    } else {
      let count = this.length - 1
      let current = this.tail
      while (count !== idx) {
        current = current.prev
        current--
      }
    }
    return current
  }
}
