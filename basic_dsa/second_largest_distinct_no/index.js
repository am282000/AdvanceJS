// 1st Approach

// const array = [3];
// const array = [3, 3, 2, 5, 2, 1, 4, 53, 53, 2, 9];

// function secondLargest() {
//   array.sort((a, b) => b - a);

//   for (let index = 0; index <= array.length - 2; index++) {
//     if (array[index] !== array[index + 1]) {
//       return array[index + 1];
//     }
//   }

//   return -1; // Return the result
// }

// 2nd approach

// const array = [3, 3, 2, 5, 2, 1, 4, 53, 53, 2, 9];

// function secondLargest() {
//   const res = new Set(array.sort((a, b) => b - a));
//   return [...res][1];
// }

// 3rd approach - O(nlog(n))

// const array = [3, 3, 2, 5, 2, 1, 4, 53, 53, 2, 9];

// function secondLargest() {
//   const res = Array.from(new Set(array)); //O(n)
//   res.sort((a, b) => b - a);  // O(nlogn)
//   return res.length >= 2 ? res[1] : -1;
// }

// 4th approach - Optimized once TC O(n)  SC O(1) 

const array = [3, 3, 2, 5, 2, 1, 4, 53, 53, 2, 9];

function secondLargest() {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] !== largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest());
