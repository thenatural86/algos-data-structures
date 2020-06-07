// Builds up the sort by gradually creating a larger left portion which is always sorted
// Insert one item at a time in the correct place.
let array = [5, 3, 4, 1, 2]

// Pseudo Code
// Start by picking the second element in  the array because the "sorted portion" will be considered the 1st element
// Compare to the 2nd element to the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion, the left side, to place the element in the correct position.

function insertion(arr) {
  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j++) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

// Big O - O(n^2)
