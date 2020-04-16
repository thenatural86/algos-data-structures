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
