// Objectives
// talk about what a searching algo is
// Implement linear search on array
// Implement binary search on sorted arrays
// Implement a naive string searching algo
// Implement the KMP searching algo

// Intro to Linear Search

// How do we search
// Given an array, the simplest way is to search for a value is look at every element in the array and see if its the value we want

// Linear search JS methods: indexOf, includes, find, findIndex
// Liner Search pseudo code
// function accepts an array and a value
// Loop through array and check if the current element is equal to the value
// If it is, return the index at which the element is found
// if the value is never found return -1

function linearSearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// O(n)

// Binary Search
// much faster form of search
// rather than eliminate one element at a time we eliminate half the remaining elements at a time
// only works on sorted arrays
// is the element that we are looking for greater than or less than the middle, discard the half that the element we arte looking for is not part of. repeat

// divide and conquer, pick point in middle
// then pick left beginning and right end

// Binary search pseudo code
// function accepts a sorted array and a value
// create a left pointer at the start of the array and a right pointer at the end
// while the left pointer comes before the right pointer
// pick the middle, length of the array / 2
// loop and check if the element is equal to the middle if so return the index
// if the value is too small move the left pointer up
// if the value is too large move the right pointer down
// if you never find the value return -1

function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
    middle = Math.floor((left + right) / 2)
  }
  if (arr[middle] === val) {
    return middle
  }
  return -1
}
