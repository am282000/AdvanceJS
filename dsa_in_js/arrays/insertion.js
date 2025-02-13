// Implement splice

// Start loop from reverse
// Shift all elements 1 space right
// Insert the new element at the specified index

const arr = [3, 6, 4, 12];
const newElement = 1;
const index = 2;

function insertion(arr, newElement, index) {
  if (index > arr.length || index < 0) {
    return "Unable to insert";
  }

  // Shift elements to the right
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }

  // Insert the new element at the specified index
  arr[index] = newElement;

  return arr;
}

console.log("Result: ", insertion(arr, newElement, index));

/*
 * JS inbuilt method
 * array.splice(start, deleteCount, item1, item2, ...);
 * Changes original array inplace
 */
// arr.splice(2, 0, 1, 14);
// console.log(arr); // [ 3, 6, 1, 14, 4, 12 ]
