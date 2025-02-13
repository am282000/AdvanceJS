const arr = [2, 5, 32, 12, 10];

const position = 2;

function deleteIndex(arr, position) {
  if (position < 0 || position > arr.length - 1)
    return "Unable to delete this index";
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  //   arr.pop();
  arr.length = arr.length - 1;
  return arr;
}

console.log(deleteIndex(arr, position));
