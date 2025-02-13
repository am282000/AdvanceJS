// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//Approach 1   TC=> O(n^2)  SC => O(1)

// let majorityElement = function (nums) {
//   if (nums.length <= 1) return nums[0];
//   let halfLength = nums.length / 2;
//   for (let i = 0; i < nums.length - 1; i++) {
//     let count = 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) count++;
//     }
//     if (count > halfLength) return nums[i];
//   }
// };

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

//Approach 2   TC => O(n)   SC => O(n)
// let majorityElement = function (nums) {
//   let freqMap = {};
//   let halfLength = nums.length / 2;
//   if (nums.length <= 1) return nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (freqMap[nums[i]]) {
//       freqMap[nums[i]] = freqMap[nums[i]] + 1;
//     } else freqMap[nums[i]] = 1;

//     if (freqMap[nums[i]] > halfLength) return nums[i];
//   }
//   return -1;
// };

// console.log(majorityElement([5]));

//  approoach 3      TC => O(nlogn) SC (1)

// let majorityElement = function (nums) {
//   const halfLength = Math.ceil(nums.length / 2);
//   nums.sort((a, b) => a - b);
//   return nums[halfLength];
// };

// console.log(majorityElement([0, 3, 2, 2, 1, 3, 3, 3, 0, 3, 3]));

//approach 4   TC => O(n)  SC(1)

let majorityElement = function (nums) {
  let curMaxElement = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) curMaxElement = nums[i];
    count += (curMaxElement === nums[i]) ? 1 : -1;
  }
  return curMaxElement;
};

console.log(majorityElement([0,3,2,2,1,3,3,3,0,3,3]));
