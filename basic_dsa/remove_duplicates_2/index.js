// 1 element can occur at most twice
// In place - last extra elements won't matter
// return k = No of unique elements (including atmost twice)
//TC O(n)  SC O(1)

// Approach 1  TC O(n)  SC O(1)

// let removeDuplicates = function (nums) {
//   let count = 0;
//   let currVal = Number.NEGATIVE_INFINITY;
//   let currValFrequency = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (currValFrequency < 2) {
//       if (currVal !== nums[i]) currVal = nums[i];
//       if (nums[count] !== nums[i]) nums[count] = nums[i];
//       count++;
//       currValFrequency++;
//     }
//     if (i < nums.length - 1 && nums[i] !== nums[i + 1]) currValFrequency = 0;
//   }
//   console.log(nums);
//   return count;
// };

// console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]));

// Approach 2
// if 3 or more no. same => except first 2 make all "_"... and subtract count of "_" from toal length , Now just swap all "_" to the right
// TC O(n)  SC O(1)

// let removeDuplicates = function (nums) {
//   let left = 0;
//   let mid = 1;
//   let right = 2;
//   let count = nums.length;

//   //   Replace duplicates(if occuring more than twice) with "_"
//   while (right < nums.length) {
//     if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
//       nums[right] = "_";
//       count--;
//       right++;
//     } else if (nums[left] === nums[mid] && nums[mid] !== nums[right]) {
//       left = right;
//       mid = left + 1;
//       right = mid + 1;
//     } else {
//       left++;
//       mid++;
//       right++;
//     }
//   }

//   let i = 0;
//   let j = 1;
//   // swap all "_" to the right;
//   while (j < nums.length) {
//     if (nums[i] === "_" && nums[j] !== "_") {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i++;
//       j++;
//     } else if (nums[i] === "_" && nums[j] === "_") {
//       j++;
//     } else {
//       i++;
//       j++;
//     }
//   }
//   return count;
// };

// console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]));

// Approach 3    TC O(n)  SC O(1)
// let removeDuplicates = function (nums) {
//   let count = 0;
//     if (nums.length <= 2) return nums.length;
//   for (let i = 2; i < nums.length; i++) {
//     if (nums[count] !== nums[i]) {
//       nums[count+2] = nums[i];
//       count++;
//     }
//   }
//   console.log(nums);
//   return count+2;
// };

// console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]));
