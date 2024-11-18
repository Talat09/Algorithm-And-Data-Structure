const MergeSort = (arr) => {
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves and merge
  return merge(MergeSort(left), MergeSort(right));
};

// Helper function to merge two sorted arrays
const merge = (left, right) => {
  const merged = [];
  let i = 0,
    j = 0;

  // Merge elements in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }

  // Concatenate remaining elements (no need for loops)
  return merged.concat(left.slice(i)).concat(right.slice(j));
};

// Example Usage
console.time("Merge Sort Time"); // Start timer
const sortedArray = MergeSort([2, 6, 1, 7, 3, 11]);
console.timeEnd("Merge Sort Time"); // End timer
console.log("Sorted Array:", sortedArray);
