function createMatrix(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array[i] = [];
    for (let j = 0; j < num; j++) {
      array[i][j] = i + j;
    }
  }
  return array;
}
console.log(createMatrix(4));
