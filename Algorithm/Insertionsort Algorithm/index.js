// Function to perform insertion sort on an array
const insertionSort = (data) => {
  let temp; // Temporary variable to hold data during swapping

  // Outer loop iterates through each element in the array
  for (let i = 0; i < data.length; i++) {
    let j = i; // Start comparing from the current element

    // Inner loop to shift elements larger than the current element to the right
    while (j > 0 && data[j] < data[j - 1]) {
      // Swap the elements if they are out of order
      temp = data[j];
      data[j] = data[j - 1];
      data[j - 1] = temp;

      j--; // Move one position backward to continue comparison
    }
  }
  return data; // Return the sorted array
};

// Example input array
const array = [5, 1, 8, 6];

// Call the insertionSort function with the input array
const result = insertionSort(array);

// Print the sorted array
console.log("result of sorted element: ", result);
