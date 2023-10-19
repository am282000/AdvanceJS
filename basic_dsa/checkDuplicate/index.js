const array = [1, 2, 9, 6, 8, 3, 4, 6, 4, 6, 4, 5];

//naive approach  - T.C.  O(n^2)   S.C. O(1)
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

//Better approach - as object can store unique keys - T.E. O(n)   S.E O(n)

function checkDuplicate2(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (obj[val]) {
      return true;
    } else {
      obj[val] = 1;
    }
  }
  return false;
}

// One more approach is we have sorted array check arr[n] ===arr[n+1]    T.C. O(n+n) = O(n)   S.C O(n)

function checkDuplicate3(arr) {
  //   arr.sort(); // this will sort the original array as well !! Keep this in mind , So use this instead  - if use this S.C. O(1)
  const temp = [...arr];
  temp.sort();

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i + 1]) return true;
  }
  return false;
}

console.log("checkDuplicate ", checkDuplicate(array));
console.log("checkDuplicate2 ", checkDuplicate2(array));
console.log("checkDuplicate3 ", checkDuplicate3(array));
