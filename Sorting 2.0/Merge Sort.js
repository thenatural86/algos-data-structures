// Objectives

// Understand the limitations of intro sorting algos
// Much faster than intro sorts
// There is a family of sorting algos that can improve time complex from O(n^2) to O(n log n)
// Trade off between efficiency and simplicity.
// The advanced algos are much more complex and take longer to understand

// Merge Sort Intro

// create in 1948 by mathematician
// 23 pages of code
// Combination of two things: merging and sorting
// third thing: splitting
// Exploits the fact that arrays of 0 or 1 elements are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (divide and conquer approach)

// Split an array into smaller subarray and keep splitting until single item arrays
// And then merge back together

// How Does it work?

let array = [8, 3, 5, 4, 7, 6, 1, 2]

// start by splitting in half (diving it)
// [8,3,5,4],[7,6,1,2]
// still not at 1 or 0 element arrays so split again
// [8,3], [5,4], [7,6],[1,2]
// still not at 1 or 0 element arrays so split again
// [8], [3], [5], [4], [7], [6], [1], [2]
// 8 single element arrays
// We merge them back together
// When merging together we compare the two arrays: which one is smaller?
// [8] - [3] = [3,8]
// [5] - [4] = [4,5]
// [7] - [6] = [6,7]
// [1] - [2] = [1,2]
// then we repeat the process - merge the 1st and 2nd arrays and 3rd and fourth arrays
// [3,8] - [4,5]
// [6,7] - [1,2]
// these arrays are already sorted so we make comparisons
// compare the 1st item of the 1st array to the 1st item of the 2nd array, which one is smaller?
// [3] - [4] = [3]
// then compare
// [8] - [4] = [3,4]
// then compare
// [8] - [5] = [3,4,5,8]
// Do the same for other side which results in
// [3,4,5,8] - [1,2,6,7]
// repeat same process which results in
// [1,2,3,4,5,6,7,8]

// So we split array into sub-arrays until arrays are 1 or 0 elements long
// then we merge the sorted arrays

// Merge Arrays Intro
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two sorted arrays  which are sorted this helper function should create a new array which is also sorted, and consists of all the elements in the elements in the two input arrays
// This should run in O(n + m) time and space
// n is first array, m is second array (two inputs to function)
// Iterating over each item in each array once
// first part of merge sort is writing a function to merge two sorted arrays

// Merging Arrays Pseudo Code

// Define a function that takes two inputs
// Create an empty array, take a look at the smallest values in each input array
// create two counters i and j that both start at 0
// while there are still values that we haven't looked at..
// if the value in the first array is smaller than the value in the second array, push the value ion the first array into our results and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array, push the value in the first array into our results and move on to the value in the second array
// Once we exhaust one array, push in all remaining values from the other array

// merge([1, 10, 50], [2, 14, 99, 100])

// [1,10,50], [2,14,99,100]
// compare 1 and 2, which is smaller? 1
// results = [1]
//  move on
// compare 10 and, which is smaller?
// [1,2]
// move on
// compare 10 and 14
// [1,2,10]
// compare 14 50
// [1,2,10,14]
// compare 50 and 99
// [1,2,10,14,50]
// first array is empty so we push the rest of 2nd array into results

// Merging Arrays Implementation

function merge(arr1, arr2) {
  // variable set to empty array
  let results = []
  // Pointers start at 0 and move through array
  let i = 0
  let j = 0

  // while both arrays have data in them
  while (i < arr1.length && j < arr2.length) {
    // if the item in arr2 is greater than the item in arr1
    if (arr2[j] > arr1[i]) {
      // push the smaller item from arr1 into the results array
      results.push(arr1[i])
      // increment the i pointer by 1
      i++
    } else {
      // otherwise push the item from arr2 into results
      results.push(arr2[j])
      // increment the j pointer by 1
      j++
    }
  }
  // while there is still data in arr1 after first while loop runs
  while (i < arr1.length) {
    // push item from arr1 into results
    results.push(arr1[i])
    // increment
    i++
  }
  // while there is still data in arr2 after first while loop runs
  while (j < arr2.length) {
    // push item from arr2 into results
    results.push(arr2[j])
    // increment
    j++
  }
  // finish and return results
  return results
}

// mergeSort pseudo
// uses recursion
// break up the array into halves until you have arrays that are empty or have one element
// use slice to slice(0, until middle of the array) and from splice(from the middle of the array, 0) to get two halves
// call mergeSort() again to break those halves into halves
// keep going recursively until we hit the base case of the arrays length being less than or equal to 1
// Once we have smaller sorted arrays, merge those arrays with other sorted arrays until we are back to the full length of the array
// Once the array has been merged back together, return the merged and sorted array

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr
  // find the mind point
  let mid = Math.floor(arr.length / 2)
  // recursive call on left half which = is left <= 1
  let left = mergeSort(arr.slice(0, mid))
  // recursive call on right half which = is right <= 1
  // right recursive call needs to wait until left finishes before it can run
  let right = mergeSort(arr.slice(mid))
  // merge left and right by calling merge
  return merge(left, right)
}

//
mergeSort([10, 24, 76, 73])
// check  if (arr.length <= 1) return arr? NO
// find middle point
// then call mergeSort of left side
// mergeSort([10, 24])
// is ([10, 24] <= 1)? NO
// call merSort on left again
// mergeSort([10])
// check  if ([10] <= 1) return arr? YES!
// return [10]
// mergeSort([10,24]) has a value for left of [10]
// so it moves to next line and calls mergeSort on right
// mergeSort([24])
// mergeSort([24] <= 1) return arr? YES
// return [24]
// now we have a left and a right
// can move to next line
// merge(left,right)
// [10] merge [24] returns [10,24]
