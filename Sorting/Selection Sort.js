// Selection Sort
// Similar to bubble sort but instead of placing the larger values first, it places the smaller values into sorted position first

let exampleArray = [5, 3, 4, 1, 2]

// compare 5 and 3
// 3 is minimum value
// [5, 3, 4, 1, 2]
// compare 3 and 4
// 3 is the minimum value
// [5, 3, 4, 1, 2]
// compare 3 and 1
// 1 is the minimum value
// [5, 3, 4, 1, 2]
// compare 1 and 2
// 1 is the minimum value

// at the end we swap the current minimum with the 1st element
// [1, 3, 4, 5, 2]
// smallest item is now at the beginning
// then repeat the process with the rest of the array

// Selection Sort Pseudo
// Store the first selection as the minimum value that the function has seen so far
// Compare this item to the next item in the array until we find a smaller number
// if a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
// if the minimum is not the value(index) we initially began with then swap the values
// repeat process until array is sorted
// nested loop, conditional, swap

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  }

  for (let i = 0; i < arr.length; i++) {
    // Store the first selection as the minimum value that the function has seen so far
    // the position of the smallest element we've seen so far
    let lowest = i
    // want to compare i to the value at the index in front of it, so j = i + 1
    for (let j = i + 1; j < arr.length; j++) {
      // check the value of lowest to the value at j
      // is arr[1] < arr[0]? yes
      if (arr[j] < arr[lowest]) {
        // so we set lowest (0) to be j (1)
        // index 1 becomes the new index 0
        lowest = j
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest)
    }
  }

  return arr
}

selectionSort([34, 22, 10, 19, 17])
// i, j, lowest
// 0, 1, 1
// 0, 2, 2
// 0, 3, 2
// 0, 4, 2

// Big O
// Selection sort is not very efficient O(n^2)
