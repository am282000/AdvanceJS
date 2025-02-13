// Does element exists 64 ??

// let arr = [10, 30, 50, 29, 64, 99];
// let searchValue = 64;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === searchValue) {
//     console.log(`Found ${searchValue} at ${i} index.`);
//     break;
//   }
// }

// Find all the indexes of a val

// let arr = [10, 30, 50, 29, 64, 99, 64, 64];
// let searchValue = 64;
// const foundIndexes = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === searchValue) {
//     foundIndexes.push(i);
//   }
// }
// console.log(`Found ${searchValue} at ${foundIndexes} indexes.`);

// Inbuilt JS method
let arr = [10, 30, 50, 29, 64, 99, 64, 64];
let searchValue = 64;

console.log(arr.indexOf(searchValue)); // Will return only first occ
