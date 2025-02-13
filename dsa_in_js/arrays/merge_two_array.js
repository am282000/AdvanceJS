
/*********Manually using for loop*********/

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr1.length; i++) {
//   arr3[arr1.length + i] = arr2[i];
// }
// // arr1.forEach((p) => arr3.push(p));
// // arr2.forEach((p) => arr3.push(p));
// console.log("arr3: ", arr3);


/*********Inbuilt method*********/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log("arr3: ", arr3);
