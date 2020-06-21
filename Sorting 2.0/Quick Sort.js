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
