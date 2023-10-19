// Kadane's Algorithm is best for this

// approach 1
// Maximum sum subarray
// Input [-2,1,-3,4,-1,2,1,-5,4]  ==> Output 6 , [4,-1,2,1]

//# Approach 1 Naive Method => T.C. = O(n^2)  S.C. = O(1)
// function maxSumSubArray(arr) {
//   let finalMax = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i < arr.length; i++) {
//     let currMax = arr[i];
//     let combinedRes = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       combinedRes = combinedRes + arr[j];
//       currMax = Math.max(currMax, combinedRes); //O(1)
//     }
//     finalMax = Math.max(finalMax, currMax); //O(1)
//   }
//   return finalMax;
// }
// console.log(maxSumSubArray([]));

// Approach 2
// function maxSumSubArray(arr) {
//   let finalMax = arr[0];
//   let finalArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let combinedRes = 0;
//     let combinedArray = [];
//     for (let j = i; j < arr.length; j++) {
//       combinedRes = combinedRes + arr[j];
//       combinedArray.push(arr[j]);
//       if (combinedRes > finalMax) {
//         finalMax = combinedRes;
//         finalArray = [...combinedArray];
//       }
//     }
//   }
//   console.log("finalArray : ", finalArray);
//   return finalMax;
// }
// console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//approach 3

// function maxSumSubArray(arr) {
//   let finalMax = arr[0];
//   let startIndex = 0;
//   let endIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let combinedRes = 0;
//     let combinedArray = [];
//     for (let j = i; j < arr.length; j++) {
//       combinedRes = combinedRes + arr[j];
//       combinedArray.push(arr[j]);
//       if (combinedRes > finalMax) {
//         finalMax = combinedRes;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }
//   return {
//     sum: finalMax,
//     subArray: arr.slice(startIndex, endIndex + 1),
//   };
// }
// console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// approach 4 - Kadane's Algoriithm
// TC - O(n)   SC - O(1)
function maxSumSubArray(arr) {
  let maxSum = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > maxSum) maxSum = sum;
    if (sum < 0) sum = 0;
  }
  return maxSum;
}
console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
