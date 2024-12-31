function maxSubArraySum(arr) {
    // Initialize variables to keep track of the maximum sums.
    // `maxSoFar` stores the maximum sum encountered so far.
    // `maxEndingHere` stores the maximum sum of the subarray ending at the current position.
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    // Loop through the array starting from the second element.
    for (let i = 1; i < arr.length; i++) {
        // Update `maxEndingHere` to include the current element.
        // If the current element itself is greater than the sum of the current element
        // and the previous `maxEndingHere`, start a new subarray from the current element.
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update `maxSoFar` if the current `maxEndingHere` is greater than the previous `maxSoFar`.
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    // Return the maximum subarray sum found.
    return maxSoFar;
}

// Example usage:
// Test array containing positive and negative numbers.
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Output the result of the maximum subarray sum calculation.
console.log("Maximum subarray sum is:", maxSubArraySum(arr));
