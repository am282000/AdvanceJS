//IsPower of 3

// function isPowerOfThree(num) {
//     while (num >2 && num %3 ===0) {
//       if (num === 3) return true;
//       num = num / 3;
//     }
//     return false;
//   }
//   console.log(isPowerOfThree(1));

// function isPowerOfThree(num) {
//   if (num < 1) return false;

//   while (num % 3 === 0) {
//     num = num / 3;
//   }
//   return num === 1;
// }
// console.log(isPowerOfThree(3));

//Lograthrmic approach

function isPowerOf() {
  const num = 26;
  const by = 3;

  const res = Math.log10(num) / Math.log10(by);
  return res % 1 === 0;
}
console.log(isPowerOf());
