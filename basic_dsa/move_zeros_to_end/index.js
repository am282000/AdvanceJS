// We are given a array , we have to move all zero to end in-place (without extra array)
// Also the order of non zero elements remain same

//Example [2,0,1,0,6] => [2,1,6,0,0]

// SOLUTION 1

// const array = [2, 0, 1, 0, 6];

// function swap(zeroPointerIndex, nonZeroPointerIndex, arr) {
//   let temp = arr[zeroPointerIndex];
//   arr[zeroPointerIndex] = arr[nonZeroPointerIndex];
//   arr[nonZeroPointerIndex] = temp;
// }

// const moveZeroToEnd = function (arr) {
//   let zeroPointerIndex = 0;
//   let nonZeroPointerIndex = 0;

//   while (nonZeroPointerIndex < arr.length) {
//     if (arr[zeroPointerIndex] === 0 && arr[nonZeroPointerIndex] === 0) {
//       nonZeroPointerIndex++;
//     } else {
//       if (arr[zeroPointerIndex] === 0) {
//         swap(zeroPointerIndex, nonZeroPointerIndex, arr);
//       }
//       nonZeroPointerIndex++;
//       zeroPointerIndex++;
//     }
//   }
//   console.log("Result: ", arr);
// };
// moveZeroToEnd(array);

//SOLUTION 2
const array = [2, 0, 1, 0, 6];

function swap(zeroPointerIndex, nonZeroPointerIndex, arr) {
  let temp = arr[zeroPointerIndex];
  arr[zeroPointerIndex] = arr[nonZeroPointerIndex];
  arr[nonZeroPointerIndex] = temp;
}

const moveZeroToEnd = function (arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) nonZeroIndex++;
    else if (nonZeroIndex > 0) {
      let t = arr[i];
      arr[i] = 0;
      arr[i - nonZeroIndex] = t;
    }
  }
  console.log("Result: ", arr);
};
moveZeroToEnd(array);
