/*
    Run aoop i 
    In inner loop if j index is greater than j+1 than swap 
    T.E. O(N^2)
    S.C. O(1)

    - Worst time complex is when array is in reverse order
    - Best time complexity is when array is already sorted
    Bubble sort is an in-place sorting algorithm 
    meaning it sorts the array without requiring additional space equivalent to the input size. 
    The only extra space used is for a few variables like 'temp' and 'swapped'
    
    [40,30,12,25]
    [30,40,12,25]
    [30,12,40,25]
    [30,12,25,40] 
    [30,12,25,40] - Repeated
    [12,30,25,40]
    [12,25,30,40]
    ....till 16 iterations  - Extra computation
*/

// const arr = [40, 30, 12, 25];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr); // To see result after every swap
//     if (arr[j] > arr[j + 1]) {
//       const temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

/*
    Optimization
    1. Reduce Unnecessary Comparisons: After each pass, largest elemet is at end, so dec inner loop iterations by 1
    2.  Early Exit if Already Sorted: set sorted true in inner loop , check for sorted false in outer loop and return
    3. Edge Case Handling: arr.length >1
*/

const arr = [40, 30, 12, 25];

if (arr.length > 1) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(arr); // To see result after every swap
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}

console.log(arr);
