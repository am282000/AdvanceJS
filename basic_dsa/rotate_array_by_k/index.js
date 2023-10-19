// [1,2,3,4,5,6,7]  k= 3   [5,6,7,1,2,3,4]

//T.C = O(n), S.C = O(n) (for both O(k + n - k) + O(n) = O(n).)
// function rotateArray(arr, k) {
//   if (k > arr.length) k = k % arr.length;
//   const rotatedArray = arr.slice(arr.length - k, arr.length); //O(n - k)
//   const slicedArray = arr.slice(0, arr.length - k); //O(k)
//   return rotatedArray.concat(slicedArray); //O(n)
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 6));

//approach 2  T.C O(n)  S.C O(n)

// function rotateArray(arr, k) {
//   const size = arr.length;
//   if (k > size) k = k % size;
//   const rotatedArray = arr.splice(size - k, size); //O(n)
//   arr.unshift(...rotatedArray); // O(n)
//   return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//approqch 3 - No inbuilt method TC- O(n)  SC- O(n)

// function rotateArray(arr, k) {
//   let size = arr.length;
//   if (k > size) k = k % size;
//   let newArr = [];
//   for (let i = size - k; i < size; i++) {
//     newArr.push(arr[i]);
//   }
//   for (let j = 0; j < size - k; j++) {
//     newArr.push(arr[j]);
//   }
//   return newArr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 6));

//aproach 4 -  k =2 .... 3 reversal [1,2,3,4,5] => [5,4,3,2,1] => [4,5,3,2,1] => [4,5,1,2,3]
//TC- O(n) SC- O(1)
// function reverse(arr, left, right) {
//   while (left < right) {
//     let temp = arr[left];
//     arr[left++] = arr[right];
//     arr[right--] = temp;
//   }
// }

// function rotateArray(arr, k) {
//   let size = arr.length;
//   if (k > size) k = k % size;
//   reverse(arr, 0, size - 1); //O(n)
//   reverse(arr, 0, k - 1); //O(k)
//   reverse(arr, k, size - 1); //O(n-k)
//   return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//  approach 5  TC => O(k)   SC => O(1)  => TLE (Not prefferable)

// let rotate = function (array, k) {
//   let count = 0;
//   if (k > array.length) k = k % array.length;
//   while (count !== k) {
//     array.unshift(array.pop());
//     count++;
//   }
//   return array;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));


