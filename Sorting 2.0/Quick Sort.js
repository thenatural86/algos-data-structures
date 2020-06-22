// Intro to Quick Sort
// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied to either side of the pivot

// How Does It Work?
// [5,2,1,8,4,7,6,3]
// pick some element: 5
// move all the numbers < 5 to the left, all numbers > 5 to the right
// numbers to left and right are not sorted but pivot number is now in the correct place (index)
// recursively repeat the process on the left and right sides

// Pivot Helper
// helper method responsible for arranging elements in an array on either side of a pivot
// Given an array this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values that are less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
// the order of elements on either side of the pivot does not matter
// the helper should do this IN PLACE, meaning it should not create a new array
// when complete the helper should return the index of the pivot

// Picking a Pivot
// the runtime of quicksort depends in part on how we select a pivot
// ideally the pivot should be chosen so that it's roughly the median value in the dataset that is being sorted
// for simplicity we'll chose the pivot to be the first element (slows algo down)
// takes first element and every value less than that elements value goes to the left, greater than goes to the right

// Pivot Helper Pseudo Code

// accepts three arguments: an array, a start index and an end index (these can default to 0 and the array length - 1 respectively)
// grab the pivot from the start of the array
// store the current pivot index in a variable (this will keep track of where the pivot should end up)
// loop through the array from the start until the end
// if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
//
// swap the starting element (i.e the pivot) with the pivot index
// return the pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

// pivot([4, 9, 2, 1, 5, 7, 6, 3])
