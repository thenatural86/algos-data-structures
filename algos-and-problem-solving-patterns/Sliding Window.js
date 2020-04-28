// SLIDING WINDOW PATTERN
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on certain condition, the window either increases or closes(and new window is created)
// Very useful for keeping track of  subset of data in an array/string ect..

// EXAMPLE
//  Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in an array

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10, max sum of two digits that are next to each other
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17, max sum of four digits that are next to each other
maxSubarraySum([], 4) //null

// make a window and move it up depending on the condition

// Naive Approach - O(n^2)
// create loop that starts at beginning, then create nested loop that sums together 4 items and create a variable to keep track of that sum and then move forward 1, and compare that and take the higher value

function maxSubarraySum(arr, num) {
  // edge case
  if (num > arr.length) return null
  // account for an array with all negative numbers, biggest sum would be negative so starting at 0 doesn't help for that edge case
  let max = -Infinity
  // loop through and stop incrementing when i reaches last element where it can still sum up the correct number of elements
  for (let i = 0; i < arr.length - num + 1; i++) {
    // stores the sum each time through and compares to max, and if temp is greater than max, max becomes temp
    temp = 0
    // nested loop
    for (let j = 0; j < num; j++) {
      // sum elements
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// SLIDING WINDOW APPROACH - time - O(n)
// subtract the first number and add in the next last number
// maxSubarraySum([1,2,3,4], 3)

function maxSubarraySum(arr, num) {
  // tempSum and maxSum
  let maxSum = 0
  let tempSum = 0
  // edge case
  if (num > arr.length) return null
  // loop up to first sum length and set that to the maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  // set tempSum to maxSum
  tempSum = maxSum
  // begin looping from the nth number in the array; until end of array; one by one
  for (let i = num; i < arr.length; i++) {
    // new tempSum equals, current tempSum - the first number in the window, then add the next number in the array
    tempSum = tempSum - arr[i - num] + arr[i]
    // compare tempSum and maxSum and assign the bigger number to maxSum
    maxSum = math.Max(maxSum, tempSum)
  }
  return maxSum
}

maxSubarraySum([1, 2, 3, 4], 3)
