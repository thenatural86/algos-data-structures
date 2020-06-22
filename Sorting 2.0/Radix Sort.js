// Comparison Sort Algos
// Base comparison that we are doing at any given point is between two items

// Bubble, Insertion and Selection Sort - O(n^2)
// Quick and Merge Sort - O(n log n)

// We can do better but not by making comparisons

// Radix Sort
// Radix Sort doesn't make direct comparisons
// Special sorting algo that works on lists of numbers
// It never makes comparisons between to elements
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a bigger number

// How it works - [1556, 4, 593, 86]

// take a list of base 10 numbers
// create 10 different buckets
// each bucket represents all of the possible 1 digit numbers in base 10, 0 - 9
// start by looking at the first digit (digit farthest to the right) in a number (6,4,3)
// group them into buckets based on that number
// then form back into a list with the order that they are in after grouping
// then repeat the process except we look at the next digit to the left and group them by that digit
// reform into list in the order the are in after grouping
// repeat the process, group them according to the next digit to the left
// then reform into a list and group agin by the next digit to the left

// number of times we do this process depends on the number of digits in our largest number. 1556 is largest number, has 4 digits in it, do the process 4 times

// Radix Sort Helper Methods
// In order to implement Radix sort, it's helpful to build a few helper methods first

// getDigit(num, place) - returns the digit in num at the given place value

// getDigit(12345, 0) -> 5
// getDigit(12345, 1) -> 4
// getDigit(12345, 2) -> 3
// getDigit(12345, 3) -> 2

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// getDigit(7323, 2)

// Math.abs - absolute value so we get the number we want even if it's a negative (-) value
// Math.pow(10,i) - makes it so we are dividing by 100.  7323 /100
// Math.floor - rounds down, 73.23 -> 73
