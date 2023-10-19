const array = [2, 25, 5, 5, 7, 2, 3, 3, 4, 4, 1, 2, 5, 5];
// const array = [2, 25, 5];

// Naive T.C O(n^2)  S.C. = O(1)
function mostOccuringElement(arr) {
  let mostOccuringVal = arr[0],
    i,
    j,
    maxCount = 0;

  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      mostOccuringVal = arr[i];
    }
  }
  return mostOccuringVal;
}

//Better approach  T.C.   O(n)  S.C.   O(n)
function maxOccuringElement(arr) {
  const frequencyMap = {};
  let maxOccurence = 1;
  let maxOccuringElem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyMap[element] >= 0) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }

    if (frequencyMap[element] > maxOccurence) {
      maxOccurence = frequencyMap[element];
      maxOccuringElem = element;
    }
  }
  return maxOccuringElem;
}

console.log(mostOccuringElement(array));
console.log(maxOccuringElement(array));
