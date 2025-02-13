// # 1st variation - [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
// # 2nd variation - rowIndex = 3, return [ 1, 3, 3, 1 ]

// const n = 5;
// const rowIndex= 3;
// const output = [];
// for (let i = 0; i < n; i++) {
//   const arr = [];
//   for (let j = 0; j <= i; j++) {
//     if (j === 0 || j === i) {
//       arr.push(1);
//     } else {
//       const previousArr = output[i - 1];
//       arr.push(previousArr[j - 1] + previousArr[j]);
//     }
//   }
//   output.push(arr);
// }
// console.log(output[rowIndex]);

// # 3rd vaiation  [ [ 1, 2, 3, 4, 5 ], [ 3, 5, 7, 9 ], [ 8, 2, 6 ], [ 0, 8 ], [ 8 ] ]

const input = [1, 2, 3, 4, 5];

const output = [];

function findLastValueOfPascalTriangle() {
  if (input.length === 1) return input[0];
  const n = input.length;
  output.push(input);

  for (let i = 1; i < n; i++) {
    const arr = [];
    const previousArr = output[i - 1];

    for (let j = 0; j < n - i; j++) {
      const res = (previousArr[j] + previousArr[j + 1]) % 10;
      arr.push(res);
    }
    output.push(arr);
  }
  console.log(output);

  return output[input.length - 1][0];
}

console.log(findLastValueOfPascalTriangle());
