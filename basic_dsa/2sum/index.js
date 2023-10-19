// Brute Force

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "Doesn't exist";
};
// console.log(twoSum([2, 7, 11, 15], 18));

// pro approach
// Using object [2,7,11,13]
//  key: index approach
// {
//   '2': check(is target - 2 is there yet ) if not than assign simply index i.e. '0' here,
//   '7':  check(is target - 7 = 2 is there yet ) than return  [obj[2],1]  => here 1 is the index of 7
// }
// T.C O(n)  S.C O(n)
const twoSumm = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else obj[n] = i;
  }
  return "Nhi h";
};

console.log(twoSumm([2, 7, 13, 11], 9));
