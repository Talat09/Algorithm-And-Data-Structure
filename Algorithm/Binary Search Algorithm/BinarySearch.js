// Function to perform binary search on a sorted array
const binarySearch = (arr, target) => {
  // Initialize the left and right pointers for the search range
  let left = 0;
  let right = arr.length - 1;

  // Loop until the search range is exhausted
  while (left <= right) {
    // Calculate the middle index of the current search range
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid; // Return the index if target is found
    }
    // If target is greater than the middle element, ignore the left half
    else if (arr[mid] < target) {
      left = mid + 1; // Move the left pointer to mid + 1
    }
    // If target is smaller than the middle element, ignore the right half
    else {
      right = mid - 1; // Move the right pointer to mid - 1
    }
  }

  // Return -1 if the target is not found in the array
  return -1;
};

// Test data
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sorted array of numbers
const arr1 = [6, 13, 14, 25, 33, 43, 51]; // Sorted array of numbers
const target = 5; // Target value to search for
const target1 = 14; // Target value to search for

// Call the binary search function and store the result
const result = binarySearch(arr, target);
const result1 = binarySearch(arr1, target1);

// Output the result (4 is the index of the target value in the array)
console.log("Position of Target Index:", result); // Expected output: 4
console.log("Position of Target Index:", result1); // Expected output: 2
/*
added full algorithm here step by step:

Example Walkthrough:
Given arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and target = 5:

First Iteration:
- left = 0, right = 9
- mid = Math.floor((0 + 9) / 2) = 4
- arr[mid] = 5 (equal to target), so the function returns mid, which is 4.



*/
