// What is Sorting?
// Sorting is the process of rearranging the items in a collection (an array) so that the items are in some sort of order
// smallest to largest, alpha, date, ect..

// Why?
// very common task in programming
// different sorting algos have pros and cons
// Basic Sorting algos are: bubble, selection, insertion

// JavaScript built in sort
// Sort an array of string alphabetically
// Sort an array of numbers doesn't have discernable pattern
// According to MDN, default sort order is "according to string Unicode code points."
// Converts each element into a string and then the value is taken from that and then sorted. Leads to unexpected behavior

// Tell JS how to sort
// built in sort method accepts an optional comparator function
// Used to tell JS how we want to sort
// Looks at a pair of elements (a, b) and determines their sort order based on the return val
// if negative (-) number is returned, a comes before b
// if positive (+) number is returned, b comes before a
// if 0 is returned, a and b are the same

function compare(a, b) {
  return a - b
}
function numCompare(num1, num2) {
  return num1 - num2
}
function strCompare(str1, str2) {
  return str1 - str2
}

// Bubble Sort Overview
// A sorting algo where the largest values bubble to the top
// As we loop through each item, we compare it to the next item in the array
// We check if it is larger than the one we are comparing it to, if it is larger, we swap

let exampleArray = [5, 3, 4, 1, 2]

// compare 5 and 3
// swap, [3,5,4,1,2]
// compare 5 and 4
// swap [3,4,5,1,2]
// compare 5 and 1
// swap [3,4,1,5,2]
// compare 5 and 2
// swap [3,4,1,2,5]
// one iteration, need to repeat process

// So how do we swap the elements?
// Many sorting algos have some sort of swapping functionality

// es5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// es6

const swap = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}

// Pseudo Bubble Sort
// function that takes in an array of number
// start looping with variable i from the end of the array towards the beginning
// start an inner loop with variable j from the beginning until i -1
// if arr[j] is greater than arr[j + 1], swap those two values

// note: we want to shrink the number of comparisons that we are making because we are sorting the array as we go.
// Big O is n2 (nested loops)

function bubble(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      // if val at arr[j] is greater than the one in front of it, swap.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }›
  return arr
}

;[37, 45, 9, 10]

function bubbleSort(arr) {
  let noSwaps
  const swap = (arr, idx1, idx2) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  }
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}
