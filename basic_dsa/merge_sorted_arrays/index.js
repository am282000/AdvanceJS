//v We already have 2 sorted arrays => Need to update nums1
// nums1 has a length of m + n   =>  nums1 = [1,2,3,0,0,0]
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

//1st approach  TC  O((m + n) * log(m + n))     SC  O(1)

// let merge = function (nums1, m, nums2, n) {
//   let index = 0;
//   for (let i = 0; i < nums1.length; i++) { //O(m+n)
//     if (nums1[i] === 0 && index < n) {
//       nums1[i] = nums2[index++];
//     }
//   }
//   nums1.sort((a, b) => a - b);  //O((m + n) * log(m + n))   => this is dominant
//   return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));

// 2nd approach  TC  O((m + n)     SC  O(m + n)

// let merge = function (nums1, m, nums2, n) {
//   let index = 0;
//   let newArray = [];
//   for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] <= nums2[index] && i < m) {
//       newArray.push(nums1[i]);
//     } else if (index < n) {
//       newArray.push(nums2[index++]);
//     }
//   }
//   return newArray;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));

// 3rd approach  TC  O((m + n))     SC  O(1)

// let merge = function (nums1, m, nums2, n) {
//   let j = n - 1;
//   let k = 1;
//   if (n > m) return (nums1 = nums2);
//   for (let i = m - 1; i >= 0; i--) {
//     let valueInsertAt = m + n - k;
//     if (nums1[i] >= nums2[j]) {
//       nums1[valueInsertAt] = nums1[i];
//     } else if (nums1[i] < nums2[j]) {
//       nums1[valueInsertAt] = nums2[j];
//       j--;
//       i++;
//     }
//     k++;
//   }
//   return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));

// 4th best and simple solution of 3rd approach

let merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
