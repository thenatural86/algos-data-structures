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

sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
// taking the above example and applying the Multiple Pointers patterns to it
// we have to pointers, on starting on the left at the smallest number and another starting on the right because we know that this array is sorted
// the first pair, -4 and 5 equals 1, which is greater than 0, so we move the right pointer down 1
// the next pair is -4 and 2, which equals -2, which is less than 0 so we move the left pointer up 1
// the next pair, -3 and 2 is -1, less than 0 so we move the left pointer up 1
// the next pair is -2 and 2, which is 0
