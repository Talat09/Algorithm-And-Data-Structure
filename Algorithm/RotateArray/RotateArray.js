function rotateArray(nums, k) {
  // Ensure k is within the bounds of the array length
  k = k % nums.length;
  console.log("k is: ", (k = k % nums.length));
  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1);

  return nums;
}

// Helper function to reverse a portion of the array
function reverse(array, start, end) {
  while (start < end) {
    console.log("start is before: ", start, "array is: ", array[start]);
    console.log("end is before: ", end, "array is: ", array[end]);
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    console.log("start is after: ", start, "array is: ", array[start]);
    end--;
    console.log("end is after: ", end, "array is: ", array[end]);
  }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 4;
console.log(rotateArray(arr, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
