// DIVIDE AND CONQUER
// This pattern involves dividing a dataset into smaller chunks and then repeating a process with a subset of data
// This pattern can tremendously decrease time complexity
// Quick sort and Merge sort are examples of D & C algorithms

// Example
// Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1

// Naive approach, Linear Search algorithm, O(n)
// loop through entire array, either find the number or we don't

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

// Refactor, Binary Search, time - log(n)

function search(arr, val) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)

    if (array[middle] < val) {
      min = middle + 1
    } else if (array[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

// SORTED ARRAY
// [1,2,3,4,5,6,7,8,9,10]
// divide the array using a middle point
// is the value that we are looking for greater than or less than the middle point
// look at the next subarray and pick a middle point and see if the value we are looking for is greater than or less than the the middle point
