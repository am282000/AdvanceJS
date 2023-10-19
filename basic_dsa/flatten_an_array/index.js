let arr = [1, 2, [3, 4, [5, 6, 7, [8, 9], 10], 11], 12];
const res = [];
function flatten(array) {
  array.map((i) => {
    if (typeof i === "object") {
      flatten(i);
    } else res.push(i);
  });
  return res;
}

console.log(flatten(arr));
