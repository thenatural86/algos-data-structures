// Recursion is a different way of thinking about solutions
// We can do it iteratively or recursively

// Objectives
// Define what recursion in and how it can be used
// Understand the two essential components of recursion
// Visualize the call stack to better debug and understand recursive functions
// Use helper method recursion and pure recursion to solve more difficult problems

// What is recursion?
// A process, function that calls itself
// Can be a cleaner alternative to iteration when traversing more complex data structures

// The call stack
// In almost all programming languages there is a built in data structure that manages what happens when functions are invoked
// It is a stack data structure and anytime a function is invoked it is placed, pushed, on the top of the call stack
// When Js sees the return keyword or when a function ends, the compiler will remove (pop) the top item from the top

// As functions are invoked they are added to the top of the stack and popped of from the top as well

// With an iterative approach functions are pushed on the call stack and popped when they are done
// When we write recursive functions we keep pushing functions onto the call stack

// How recursive functions work
// Invoke the same function with a different input until you reach the base case
// The base case is when the recursion ends, this is the most important part. Or else it will run forever, recursive loop
// Two essential parts of recursion - base case and different inputs on each call

// iterative
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }
  console.log("all done")
}

// recursive
function countDown(num) {
  if (num <= 0) {
    console.log("All done")
    return
  }
  console.log(num)
  num--
  countDown(num)
}
countDown(3)

// Stepping through recursive approach
// is num <= 0, no
// print 3, then subtract 1 from num
// then call countDown(num) with num which is now 2
// So we start over, is 2 <= 0, no
// print 2, subtract 1 from num
// call countDown() with num which is now 1
// is 1 <= 0, no
// print 1, subtract 1 from num
// call countDown() with num which is now 0
// base case
// is num <= 0, yes
// so we return. we have to return or else get stuck in recursive loop

// Example 2
function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

// base case usually involves a conditional
// The different input is the recursive call which we call with a smaller input each time

// sumRange(3) gets called
// the base case is not true
// return 3 + sumRange(2)
// sumRange(3) is waiting because it must have an answer for sumRange(2)
// base case is not true
// sumRange(2) return 2 + sumRange(1)
// sumRange(1) gets called
// base case is true
// so sumRange(1) returns 1
// 2 + sumRange(1) turns into 1 --> 2 + 1 = 3
// sumRange(2) returns 3
// now sumRange(3) which was waiting for the value of sumRange(2) which is 3
// so sumRange(3) returns 3(num) + 3(sumRange(2))
// returns 6

// The Classic Factorial
// 4! = 4 factorial  = 4 * 3 * 2 * 1

// Iterative approach
function factorial(num) {
  let total = 1
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}

// if num is 3
// loop through i = 3
// total * 3 = 3
// then subtract 1 from i
// i = 2
// total * 2 = 6
// next loop through, i = 1 so exit function

// Now Do it Recursively

// first thing to understand is the base case anf then how the input will change

function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

// factorial(1) is 1 * 1 = 1, so there is nothing left to multiply
// factorial(3) is 3 * factorial(2)  * factorial(1)
// nice short clean code

// Where Things Go Wrong
// no base case or base case is wrong - so program will get stuck in a recursive loop because it will never exit the loop.
// Returning the wrong thing or not returning anything which can lead to a maximum call stack size exceeded error, otherwise known as a stack overflow, because returning is what pops the function call off the call stack

// HELPER METHOD RECURSION
// so far all the examples are functions that call themselves inside their code body

// helper method recursion design pattern
function outer(input) {
  let outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable
}

// have two functions, outer function and an inner recursive function that calls itself
// used most commonly to compile an array or other list of data
// if we had result wasn't initialized between functions then the array would get reset to an empty array every time the function recurs
// outer function not recursive, inner function is recursive

// collect all the odd values in an array

function collectOddValues(arr) {
  // initialize empty array
  let result = []

  // recursive helper method to add to result
  function helper(helperInput) {
    // base case if helperInput is empty
    if (helperInput.length === 0) {
      return
    }
    // if the first element mod 2 is not equal to 0,that means it is an odd number
    if (helperInput[0] % 2 !== 0) {
      // so push helperInput[0] into result
      result.push(helperInput[0])
    }
    // then call helper with the input passed in but exclude the first element
    helper(helperInput.slice(1))
  }
  // then call helper function again
  helper(arr)
  // return result
  return result
}
collectOddValues([1, 2, 3, 4, 5])

// always looking at the first element. if the first element is even then don't push that number into result array, but does slice of that element and runs helper again with smaller array

// pure recursion
// the function is completely self contained and recursive, no helper method recursion.
// more challenging
// less straightforward than helper recursion

// pass in an empty array as default arg
function collectOddValues(arr, result = []) {
  // base case
  if (!arr.length) return result
  // if element at index 0 is odd
  if (arr[0] % 2 !== 0) {
    //  push into result array
    result.push(arr[0])
  }
  // recur collectOddValues pass in everything in array from index 1 on and result array
  return collectOddValues(arr.slice(1), result)
}

// Pure recursion tips
// for arrays use methods like slice, spread operator or concat to make copies of arrays and not mutate them
