// Without recurrsion
const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  //   console.log("array is : ", arr);
  return arr[n];
};

// recurrsion

const fibonacciRecurssion = (n) => {
  // if (n <= 1) return n;
  // return fibonacciRecurssion(n - 1) + fibonacciRecurssion(n - 2);
  return n <= 1 ? n : fibonacciRecurssion(n - 1) + fibonacciRecurssion(n - 2);
};

const onCheckFibonacci = () => {
  const num = document.getElementById("inputFib").value;
  console.log("Without recurrsion ", fibonacci(num));
  console.log("With recurssion ", fibonacciRecurssion(num));
};
