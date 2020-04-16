// Whats the idea here?
// Imagine we have multiple implementations of the same function
// How can we determine which one is best?

function reverse(s) {
  let o = ""

  for (let i = s.length - 1; i >= 0; i++) {
    o += s[i]
    return o
  }
}

// Big O is a system for classifying code and comparing it.

// Who cares?
// working with massive dataset at large companies
// Important to have a large vocab to describe code
// Useful for discussing tradeoffs between different approaches
// Good for identifying parts of code that are inefficient
// Comes up in interviews often

// Timing our code
// Let's write a function that calculates the sum of all numbers from 1 up to and including some number n

function addUpTo(n) {
  // creation of an accumulator variable
  let total = 0
  // loop through numbers
  for (let i = 1; i <= n; i++) {
    // add those numbers to total one at a time
    total += i
  }
  return total
}

// More mathy solution
function addUpTo(n) {
  return (n * (n + 1)) / 2
}

// Which one is better?
// Faster?
// Less memory intensive
// More readable
// Brevity

// The problem with time
// Different and same machines will record different times

// if not time then lets calculate the number of simple operations the computer has to perform
// in 2nd example there are 3 operations (*,+,/)

// 1st example has 7 operations that is performed during each loop, so it has 7 operations performed n times
//

// As n grows larger the time it takes to perform the function grows proportionally

// INTRODUCING BIG O

// big o notation allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
// relationship btw input  size and the time relative to that input

// We say that an algorithm is O(f(n)), big O of f of n, if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

// (f(n) = n) = function with an input of n, (f(n)), and then the output, = n.

// f(n) could be linear, (f(n) = n), as the input scales the runtime scales as well
// f(n) could be quadratic, (f(n) n2), as the input grows, the runtime squares related to the square of n
// f(n) could be constant, (f(n) = 1), doesn't have an impact, as the input grows the runtime stays constant
// f(n) could be something completely different

// describing the relationship btw the input and the runtime

// Big O is dealing with worst case scenario, the upper bound of runtime

function addUpTo(n) {
  return (n * (n + 1)) / 2
}

// above solution is O(1) because its runtime is constant, as n grows it has no change on runtime

function addUpTo(n) {
  // creation of an accumulator variable
  let total = 0
  // loop through numbers
  for (let i = 1; i <= n; i++) {
    // add those numbers to total one at a time
    total += i
  }
  return total
}

// above solution is O(n), as the input grows the runtime grows at the same rate

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
// this function print all pairs of number from 0 to n. so 2 would be 0,0, 0,1 0,2 then 1,0, 1,1 ...

// Looking at the above function we have a nested for loop.
// if we
// we have a loop which is O(n), as n grows the loop grows, and another loop which is also O(n).
