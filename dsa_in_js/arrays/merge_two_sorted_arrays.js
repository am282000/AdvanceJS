const a = [3, 5, 7, 9, 12];
const b = [1, 4, 6];
const c = [];
let i = 0,
  j = 0;

while (i < a.length && j < b.length) {
  if (a[i] < b[j]) {
    c.push(a[i]);
    i++;
  } else {
    c.push(b[j]);
    j++;
  }
  //   console.log("i: ", i, "j: ", j, "arr: ", c);
}

//Push elements that left in arr a (due to arr length mismatch) to arr c
while (i < a.length) {
  c.push(a[i]);
  i++;
}

//Push elements that left in arr b (due to arr length mismatch) to arr c
while (j < b.length) {
  c.push(b[j]);
  j++;
}

console.log(c);
