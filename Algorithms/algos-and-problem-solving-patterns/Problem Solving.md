Objectives

- Define what an algorithm is
- Devise a plan to solve algos
- Compare/contrast problem solving patterns incl. freq counters, two pointer problems and divide and conquer

What is an Algo?

- A process or set of steps to accomplish a certain task

Why do we need to know this?

- It is the foundation for being a successful problem solver and developer

How Do I Improve at Algos?

1. Devise a plan for solving problems
2. Master common problem solving patterns

- Understand the Problem
- Explore concrete examples
- Break it down
- Solve/Simplify the problem
- Look back and Refactor

UNDERSTAND THE PROBLEM

- Can I restate the problem in my own words
- What are the inputs
- What are the outputs that should come from the solution to the problem
- Can the outputs be determined from the inputs, meaning do I have enough information to solve the problem
- How should I label the important pieces of data that are a part of the problem

Write a function which takes two numbers and return their sum

function sum(n1, n2){
return n1 + n2
}

1. write a function that adds two numbers

COME UP WITH CONCRETE EXAMPLES

- can help me understand the problem better
- simple examples
- progress to more complex examples
- Edge cases - explore examples with empty or invalid inputs

Write a function which takes in a string and returns counts of each character in the string

function charCount(str){
let result = {}
for(let i = 0; i < str.length; i++){
let char = str[i].toLowerCase()
if(result[char] > 0){
result[i]++
} else {
result[char] = 1
}
return char
}

BREAK IT DOWN - it's all about the process, not the product

- communicate what i'm thinking/doing
- write out the steps i need to take to solve
  function charCount(str){
  - make object to return at end
  - loop over string for each char ...
  - if char is num/letter AND is in object, add one to it
  - if char is num/letter AND is not key in object, add it and set the value to 1
  - if char is something else (space, period , ect) do nothing
  - return object at end
    }

SOLVE/SIMPLIFY

- Solve the problem, if you can't then solve a simpler problem

- Simplify
- Find the core difficulty in what I am trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

LOOK BACK & REFACTOR

- Refactoring questions
- can you check the results
- can you derive the result differently
- can you understand it at a glance
- can you use the result or method for some other problem
- can you improve the performance
- can you think of other ways to refactor
- how have other people solved this problem

function charCount(str){
const obj = {}
for(let char of str){
char = char.toLowerCase()
if(/[a-z0-9]/.test(char)){
obj[char] = ++obj[char] || 1
}
}
return char
}

Note: performance of regex in JS can vary
