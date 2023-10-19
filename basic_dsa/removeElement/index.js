// Inplace Remove element and return length of rest after removing that element

//Output of nums = [3,2,2,3] , k = 3   => [2,2,_,_] => count og other elements => 2

//approach 1

// let removeElement = function (nums, val) {
//   //   nums.sort((a, b) => a - b); //optional
//   let currentVal = nums[i];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       currentVal = nums[i];
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;
// };

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

//approach 2
// let removeElement = function (nums, val) {
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       if (nums[index] === nums[i]) index++;
//       else nums[index++] = nums[i];
//     }
//   }
//   return index;
// };

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 0));

// approach 3

// function swap(leftIndex, rightIndex, nums) {
//   let temp = nums[leftIndex];
//   nums[leftIndex] = nums[rightIndex];
//   nums[rightIndex] = temp;
// }

// let removeElement = function (nums, val) {
//   let left = 0;
//   let right = nums.length - 1;
//   let countOfVal = 0;
//   while (left <= right) {
//     if (nums[right] === val) {
//       right--;
//       countOfVal++;
//     } else if (nums[left] === val) {
//       swap(left, right, nums);
//       countOfVal++;
//       right--;
//     } else {
//       left++;
//     }
//   }
//   console.log(nums);
//   return nums.length - countOfVal;
// };
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// approach 4

let removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else left++;
  }
  return left;
};
console.log(removeElement([2, 2, 2, 2], 2));
