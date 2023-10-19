const array1 = [1, 3, 4, 6, 6];
const array2 = [2, 5];

//Need to find does arrray1 and array2 contains something in common

// Naive approach - T.C. O(n^2)    S.C. O(1)
function checkIntersection(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

// Object approach - T.C.  O(n+n)  = O(n)     S.C.  O(n)

function checkIntersection2(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    const val = arr1[i];
    if (obj[val]) {
      obj[val] = obj[val] + 1;
    } else obj[val] = 1;
  }

  for (let j = 0; j < arr2.length; j++) {
    const val2 = arr2[j];
    if (obj[val2]) return true;
  }
  return false;
}

console.log("checkIntersection", checkIntersection(array1, array2));
console.log("checkIntersection2", checkIntersection2(array1, array2));
