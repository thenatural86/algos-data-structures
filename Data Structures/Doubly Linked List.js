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

// insert()
// adding a node in a DLL by a certain position

// if the index is less than zero or greater than or equal to the length return false
// if the index is zero, unshift
// if the index is the same as the length, push
// use the get method to access the index -1
// set the next and prev properties on the correct nodes to link everything together
// increment the length
// return true

// remove()
// removing a node in a DLL by a certain position

// if the index is less than zero or greater than or equal to the length return undefined
// if the index is 0, shift
// if the index is the same as length - 1, pop
// use the get method to retrieve the item to be removed
// update the next and prev properties to remove the found node from the list
// set the next and prev to null on the found node
// decrement the length
// return the removed node

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
  get(index) {
    if (index < 0 || index >= this.length) return null
    if (index <= this.length / 2) {
      let counter = 0
      let current = this.head
      while (counter !== index) {
        current = current.next
        counter++
      }
    } else {
      let count = this.length - 1
      let current = this.tail
      while (count !== index) {
        current = current.prev
        current--
      }
    }
    return current
  }
  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode

    this.length++
    return true
  }
}
