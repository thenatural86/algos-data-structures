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

function countDown(num) {
  if (num <= 0) {
    console.log("All done")
    return
  }
  console.log(num)
  num--
  countDown(num)
}

// iterative approach
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }
  console.log("all done")
}
