// this pattern uses objects or sets to collect values/frequency of values
// this can often avoid the need for nested loops or O(n^2) operations with arrays and strings

// Example
// write a function called same that accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of the values must be the same

// Naive Approach O(n^2)
function same(arr1, arr2) {
  // check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

;[1, 2, 3, 2], [9, 1, 4, 4]

// loop over the first array
// call indexOf and pass in the square of each value
// starting with the first element in arr1, what is the index of 1 ** 2, in arr2. In our case it is the element at index 1 and set that to correctIndex.
// if correctIndex is equal to -1, meaning it doesn't exist or is not in the array, we return false and exit
// if it is correct we call .splice on arr2 and remove that number and return true
// on the following iterations remove 4 (2**2), 9(3**2),4 (2**2)

// indexOf is a method that loops over an array, so we have a nested loop, hence it's O(n^2), quadratic

// REFACTORED - O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // construction of objects
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

;[1, 2, 3, 2, 5], [9, 1, 4, 4, 11]

// instead of looping over the 1st array and then checking for each value with a sub loop through 2nd array
// we can loop through each array one time individually 2 loops is 2n, 2 nested loops is n^2

// each object counts the frequency of individual values in th arrays
// use for..of to loop over array or string, have val which is the placeholder variable, so for each val in arr1, we will add 1 to the frequencyCounter1 val if it's in there or initialize it to 1

// then we loop over each object with a for.. in loop, for each key in frequencyCounter1
// looking at the 2, if 2**2 is not in the object the return false, so is there 4 in the 2nd object, there is
// then we check if the values correspond, if there are two 2's there needs to be two 4's. if not return false
// when we hit 5 it returns false

// use an object to breakdown the contents of an array or string and compare those objects

// ANAGRAM
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  const freqCounter = {}

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i]
    // if char exist, increment, otherwise set to 1
    freqCounter[char] ? (freqCounter[char] += 1) : (freqCounter[char] = 1)
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i]
    if (!freqCounter[char]) {
      return false
    } else {
      freqCounter[char] -= 1
    }
  }
  console.log(freqCounter)
  return true
}
anagram("anagram", "nagrama")
