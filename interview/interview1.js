// const input = [
//   {
//     key: "Sample 1",
//     data: "Data 1",
//   },
//   {
//     key: "Sample 3",
//     data: "Data 2",
//   },
//   {
//     key: "Sample 1",
//     data: "Data 2",
//   },
//   {
//     key: "Sample 1",
//     data: "Data 3",
//   },
//   {
//     key: "Sample 2",
//     data: "Data 3",
//   },
// ];

// const output = {
//   "Sample 1": [
//     { key: "Sample 1", data: "Data 1" },
//     { key: "Sample 1", data: "Data 2" },
//     { key: "Sample 1", data: "Data 3" },
//   ],
//   "Sample 3": [{ key: "Sample 3", data: "Data 2" }],
//   "Sample 2": [{ key: "Sample 2", data: "Data 3" }],
// };

// const obj = {};
// input.forEach((p) => {
//   if (obj[p.key]) {
//     obj[p.key].push(p);
//   } else {
//     obj[p.key] = [p];
//   }
// });
// console.log(obj);

// const res = Object.groupBy(input, (k) => k.key);

// Memoize function
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// function memoize(fn) {
//   const map = new Map();
//   return function (...args) {
//       const value = args.join("_");
//     if (map.has(value)) {
//       console.log("Coming fm memoized");
//       return map.get(value);
//     }
//     console.log("Calculating");
//     let res = fn(...args);
//     map.set(value, res);
//     return res;
//   };
// }
// const memoizedAdd = memoize(add);
// const memoizedSub = memoize(sub);
// console.log(memoizedAdd(1, 2));
// console.log(memoizedAdd(1, 2));
// console.log(memoizedSub(1, 2));
// console.log(memoizedSub(1, 2));
// console.log(memoizedAdd(1, 2));

// FLatenAArray

const array = [1, 2, 3, [4, [5, 6], 7], 8];

// const res = arr.flat(Infinity);
// console.log(res);

function flattenArray(arr, newArr) {
  arr.forEach((i) =>
    Array.isArray(i) ? flattenArray(i, newArr) : newArr.push(i)
  );
  return newArr;
}
const res = flattenArray(array, []);
console.log(res);
