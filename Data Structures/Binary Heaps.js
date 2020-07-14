// Objectives
// Define what a Binary Heap is
// Compare and contrast min and max heaps
// Implement basic methods on heaps
// Understand where heaps are used in the real world and what other data structures can be constructed from heaps

// What is A Binary Heap
// Very similar to a binary search tree but with some different rules
// In a Max Binary Heap, parent nodes are always larger than child nodes
// In a Min Binary Heap, parent nodes are always smaller than child nodes

// Max Binary Heap
// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// The parent is greater than the child but there are no guarantees with sibling nodes
// A Binary Heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Why do we need to know this?
// Binary Heaps are use to implement Priority Queues, which are very commonly used data structures
// They are also used quite a bit with graph traversal algorithms

// Storing Heaps
// We can store a heap in an array.
// To locate the children of nodes in an array we can use this formula:
// For any index of an array n
// The left child is stored at 2n + 1
// The right child is stored at 2n + 2

// What if we have a child node and want to find it's parent
// For any child at index n
// It's parent is at (n-1) / 2 and floor it

// insert()
// push the value into the values property on the heap
// Bubble up:
// create a variable called index which is the length of the values property - 1
// create a variable called parentIndex, which is the floor of (index-1)/2
// keep looping as long as the values element at the parentIndex is less than the values element at the child index
// swap the value of the values element at the parentIndex with the value of the element property at the child index
// set the index to be the parentIndex and start over

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
