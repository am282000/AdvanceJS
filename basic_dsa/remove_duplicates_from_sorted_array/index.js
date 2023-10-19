// [0,1,1,1,2,2,3,5,5,5,5] => [0,1,2,3,5]

//1st approach
function removeDuplicates(arr) {
  return Array.from(new Set(arr)).length;
}
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 5, 5, 5, 5]));

//2nd approach

// function removeDuplicates(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     //O(n)
//     if (!newArr.includes(arr[i])) {
//       //O(n)
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
//   return newArr.length;
// }
// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 5, 5, 5, 5]));

//approach 3 => TC - O(n)  SC - O(1)
// function removeDuplicates(arr) {
//   let i = 0;
//   while (i < arr.length) { //O(n)
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1); //O(1)
//     } else i++;
//   }
//   console.log(arr);
//   return arr.length;
// }

// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 5, 5, 5, 5]));

// approach 4 => TC - O(n)  SC - O(1)

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     //O(n)
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1); //O(1)
//       i--;
//     }
//   }
//   console.log(arr);
//   return arr.length;
// }

// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 5, 5, 5, 5]));

//approach 5 =>  T.C - O(n)       S.C - O(1)

// function removeDuplicates(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) count++;
//   }
//   return count;
// }
// console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 5, 5, 5, 5, 6]));

// approach 6  => 2 pointer  T.C. - O(n)  S.C - O(1)

// function removeDuplicates(arr) {
//   let count = 0;
//   if (!arr.length) return 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[count] !== arr[i]) {
//       count++;
//       arr[count] = arr[i];
//     }
//   }
//   console.log(arr);
//   return count + 1;
// }
// console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 5, 5, 5, 5, 6]));
