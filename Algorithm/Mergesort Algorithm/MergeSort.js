const MergeSort = (arr) => {
  console.log(arr.length);
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  console.log(`Midpoint: ${mid}`);
  // Split the array into left and right parts
  let midLeftSide = arr.slice(0, mid);
  let midRightSide = arr.slice(mid);

  console.log(`Splitting: Left => ${midLeftSide}, Right => ${midRightSide}`);

  // Recursively sort both halves
  let sortedLeft = MergeSort(midLeftSide);
  let sortedRight = MergeSort(midRightSide);

  console.log(`Sorted: Left => ${sortedLeft}, Right => ${sortedRight}`);

  // Merge the two sorted halves
  return merge(sortedLeft, sortedRight);
};

// Helper function to merge two sorted arrays
const merge = (left, right) => {
  let merged = [];
  let i = 0,
    j = 0;

  // Merge elements in sorted order
  while (i < left.length && j < right.length) {
    console.log(`Comparing: Left => ${left[i]}, Right => ${right[j]}`);

    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from `left` and `right`
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  console.log(
    `Merging: Left => ${left}, Right => ${right}, Merged => ${merged}`
  );

  return merged;
};

// Example Usage
console.time("Merge Step"); // Start timer for the merging step
let result = MergeSort([2, 6, 1, 7, 3, 11]);
console.timeEnd("Merge Step"); // End timer for the merging step
console.log("Final Sorted Array:", result);
