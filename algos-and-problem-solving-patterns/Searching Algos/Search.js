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
// then pick start beginning and end end

// Binary search pseudo code
// function accepts a sorted array and a value
// create a start pointer at the start of the array and a end pointer at the end
// while the start pointer comes before the end pointer
// pick the middle, length of the array / 2
// loop and check if the element is equal to the middle if so return the index
// if the value is too small move the start pointer up
// if the value is too large move the end pointer down
// if you never find the value return -1

function binarySearch(arr, val) {
  // set start of the array, 0 index
  let start = 0
  // set end as the length of the array - 1 to get end index
  let end = arr.length - 1
  // set middle to average of start + end and round down with Math.floor
  let middle = Math.floor((start + end) / 2)
  // while the middle is not the value we are looking for and start is less than or equal to end
  while (arr[middle] !== val && start <= end) {
    // if the val is less then the middle than we know the value is not in the other half of middle so we shift our "window" that we are looking through to make the new end equal to the middle - 1. We do the -1 because we already know that the current middle is not the val bc we checked already so setting it equal to middle would be redundant so we - 1 from middle
    if (val < arr[middle]) {
      end = middle - 1
    } else {
      // otherwise value is greater than middle so we make the middle + 1 the new start
      start = middle + 1
    }
    // either our start or end is moving so we need to recalculate the middle so use same code to find the middle of the shortened array
    middle = Math.floor((start + end) / 2)
  }
  // if the arr[middle] (item at the middle index)is equal to the value we seek than return the index of that value (middle)
  if (arr[middle] === val) {
    return middle
  }
  // if the value is not in the array return -1 so we don't look for the value outside of the arr forever
  return -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)
//            l        m              e

// Big O of Binary Search
// O(log n) or 2 to what power gives us n

// String Search
// Searching for a substring in a larger string

// count the number of times a smaller string appears in a longer string
// a straight forward approach involves checking pairs of characters individually
//  example: looking for 'omg' in 'wowomgzomg'
//  'wowomgzomg'
//  'omg' move 'omg' down the line and look for match of first character, if good look for match of second character. If not good increment 'omg' and repeat

// String Search Pseudo Code
// takes 2 string, longer string and pattern
// loop over the longer string
// loop over the shorter string
// if the characters don't match break out of inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count
