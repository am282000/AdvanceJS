// function findMajorityElement(nums) {
//   let element;
//   let count = 0;

//   // Step 1: Find a element
//   for (const num of nums) {
//     if (count === 0) {
//       element = num;
//     }

//     count += num === element ? 1 : -1;
//   }

//   // Step 2: Verify the candidate is the majority element
//   count = 0;
//   for (const num of nums) {
//     if (num === element) {
//       count++;
//     }
//   }

//   return count > nums.length / 2 ? element : null;
// }

// const nums = [3,3,4,2,4,4,4];

// const majorityElement = findMajorityElement(nums);
// console.log(majorityElement);

// function findMajorityElement() {
//   const nums = [3, 3, 4, 2, 4, 4, 4];
//   const length = nums.length;
//   const obj = {};
//   for (let i = 0; i < nums.length; i++)
//     obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
//   for (const key in obj) if (obj[key] > length / 2) return key;
//   return null;
// }

// console.log(findMajorityElement());

// function findMajorityElement(nums) {
//   const countMap = new Map();
//   let majorityElement = null;
//   let maxCount = 0;

//   for (let num of nums) {
//     const count = (countMap.get(num) || 0) + 1;
//     countMap.set(num, count);

//     if (count > maxCount) {
//       majorityElement = num;
//       maxCount = count;
//     }

//     if (maxCount > nums.length / 2) {
//       return majorityElement;
//     }
//   }
//   return null;
// }
// console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 4]));
