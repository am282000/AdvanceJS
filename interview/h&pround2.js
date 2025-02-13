function isAscendingOrder(input) {
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] > input[i]) {
      return false;
    }
  }
  return true;
}

function isIncreasingSequence(input) {
  let len = input.length;
  //   console.log(len);

  for (let i = 1; i <= len / 2; i++) {
    // i - valid breakage value
    if (len % i === 0) {
      // Because we need to break all in equal parts
      const splittedInputs = [];
      for (let j = 0; j < input.length; j = j + i) {
        let str = parseInt(input.substring(j, j + i));
        splittedInputs.push(str);
      }
      console.log(splittedInputs);
      if (isAscendingOrder(splittedInputs)) {
        return true;
      }
    }
  }
  return false;
}

console.log(isIncreasingSequence("12345"));
console.log(isIncreasingSequence("11121314"));
console.log(isIncreasingSequence("200201202"));
console.log(isIncreasingSequence("535251"));

// STEP 1
/**
  len/2 => assuming I have at least 2 numbers to compare - To check no.'s are in ascending order or not
  
  2 0 0 2 0 1 2 0 2   - valid breakage (all no have equal length)
  20 02 01 20 2  -- cancel (all no not have equal length)
  200 201 202  - valid breakage
  2002 0120 2 --cancel
  
  # Extra cases which can never be able to even split into 2 numbers of equal length. Than how we check is these in Ascending oder or not
  20020 1202 --cancel
  200201 202 --cancel
  2002012 02 --cancel
  20020120 2 --cancel
  200201202 -- cancel not even have other number to check is these in Ascending
  
  
  
  STEP 2
  length % breakageValue === 0   (e.g. breakageValue 1,2,3,4)
  Means we don't left with any no , means all no's are of same length
  
  
  STEP 3
  Create arrays with these valid breakage Value like for 200201202
      [
          2, 0, 0, 2, 0,
          1, 2, 0, 2
      ]
    and 
  
      [ 200, 201, 202 ]
  
  STEP 4 
  
  Check if the  i th index(i.e. 201) is less than i - 1 th (i.e. 200) index - Than return undefined from the loop no need to proceed further with this brekage value
  
  Check with other valid breakage value if in an aray all i - 1 th index are less than i th index than only return true
  **/
