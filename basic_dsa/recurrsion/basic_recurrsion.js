//Without recurrsion
// function multiply(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

//With recurrsion
function multiply(num) {
  if (num <= 1) return 1;
  return num * multiply(num - 1);
}
console.log(multiply(5));

// For Array
function arrayMultiply(arr) {
  if (arr.length <= 0) return 1;
  else return arr[arr.length - 1] * arrayMultiply(arr.slice(0, arr.length - 1));
}
console.log(arrayMultiply([1, 2, 3, 4, 5]));
