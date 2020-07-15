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

// remove()
// remove the root
// replace with the most recently added
// adjust (sink down) - the procedure for deleting the root from the heap (effectively extracting the maximum element in a max heap or the minimum element in a min-heap) and restoring the properties is called down-heap or sink-down/bubbledown

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
  extractMax() {
    let max = this.values[0]
    let end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.bubbleDown()
    }
    return max
  }
  bubbleDown() {
    let idx = 0
    let length = this.values.length
    let element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(41)
heap.insert(39)
heap.insert(18)
heap.insert(27)
heap.insert(12)
