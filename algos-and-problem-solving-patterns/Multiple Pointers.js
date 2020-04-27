// Multiple Pointers
//  Creating pointers or values that correspond to an index or position and move towards the beginning
// end or middle based on a certain condition

// very efficient for solving problems with minimal space complexity as well

// EXAMPLE
// write a function called sumZero which accepts a SORTED array of integers.
// the function should find the first pair where the sum is 0.
// Return an array that contains both values that sum to zero or undefined if a pair does not exist

sumZero([-3, -2, -1, 0, 1, 2, 3]) //[-3,3]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1, 2, 3]) //undefined

// how to approach?
// smallest numbers on left biggest numbers on right
// we can use two pointers and test for certain conditions
// to see if we want to move one pointer down and the other pointer up

// naive solution - time complexity - O(n^2), space-complexity O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] = arr[j] === 0)) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// first loop look goes through array, second loop goes through entire array for each element in the array, looking for an element to add to i that will equal 0

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])
// taking the above example and applying the Multiple Pointers patterns to it
// we have to pointers, on starting on the left at the smallest number and another starting on the right because we know that this array is sorted
// the first pair, -4 and 5 equals 1, which is greater than 0, so we move the right pointer down 1
// the next pair is -4 and 2, which equals -2, which is less than 0 so we move the left pointer up 1
// the next pair, -3 and 2 is -1, less than 0 so we move the left pointer up 1
// the next pair is -2 and 2, which is 0

// REFACTOR
// time - O(n), space - O(1)
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

//  avoid getting a false positive from 0 - 0 = 0, we set our condition for the while loop to be
// left < right, not left <= right

// Example 2
// countUniqueValues
// implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array
// There can be negative numbers in the array, but it will always be sorted
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 4]) // 4
// Approach
// start a pointer at the 1st index and a pointer at the 2nd index and compare the two.
// they are not equal so we create a variable to count how many times they are not equal
// or use the array itself to store the unique values at the beginning of the array.
//             i
let example = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
//                j

// have two pointers, i which starts on the 0st index and j which starts on the 1nd index, and compare them (1,1), they are the same
// so we increment j, now on the 2rd index and leave i (1st index) and then compare (1,1)
// its (1,1) again so increment j (3th index) and compare to i(1st index)
// they are different, so we increment i (2nd index) and put a two there.
// now i will be looking at 2, we increment j so it's at the 4th index
// we compare them and see that they are different so we put a 3 at the 2nd index
// then we increment j, it's another 3 so we don't do anything just increase j
// then compare i and j (3 and 4)
// we increment i, change the value to 4 and then increment j
// do this process until the end
// take the current index of and add 1, to get the unique values

// we built up the unique values at the beginning then can figure out how many unique values there are based on what i is equal to
let newExample = [1, 2, 3]

function countUniqueValues(arr) {
  // check for empty array
  if (arr.length === 0) return 0
  // i starts on 0 index
  let i = 0
  // j starts on index 1, goes through entire loop
  for (let j = 1; j < arr.length; j++) {
    // if i and j are not equal
    if (arr[i] !== arr[j]) {
      // increment i
      arr[i]++
      // then set arr[i] to equal what is at arr[j]
      arr[i] = arr[j]
    }
    console.log(i, j)
  }
  // i will stop at last unique value and add 1 because arrays are zero indexed
  return i + 1
}

// when i and j are equal we don't do anything, j increments automatically because of the loop
