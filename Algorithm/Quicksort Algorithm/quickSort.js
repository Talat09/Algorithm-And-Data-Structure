function quickSort(arr) {
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the pivot element (middle element here for simplicity)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Separate the elements into two groups: less than and greater than the pivot
  const left = arr.filter((el) => el < pivot);
  console.log("left:", left);
  const right = arr.filter((el) => el > pivot);
  console.log("right:", right);
  // Recursively sort and combine the groups with the pivot
  console.log("quick sort left:", ...quickSort(left));
  console.log("pivot:", pivot);
  console.log("quick sort right:", ...quickSort(right));
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [9, 4, 2, 3, 11];

const sortedArray = quickSort(array);
console.log(sortedArray);
