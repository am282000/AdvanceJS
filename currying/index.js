// Converting a normal function with multiple
// arguements into the closure with 1 arguement at a time

// e.g. f(a,b) => f(a)(b)

//Instead of this
function f(a, b) {
  return `${a} ${b}`;
}

//Use this
function currying(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

function callCurry() {
  console.log(f(1, 2));
  console.log(currying(1)(2));
}

// Sum using curring

//instead of

function sum(a, b, c) {
  return a + b + c;
}

function sumUsingCurring(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

// calculator - run using node currying/index.js and opening live server

function calculate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "sub") return a - b;
      else if (operation === "mul") return a * b;
      else if (operation === "div") return a / b;
      else return "Invalid operation";
    };
  };
}

console.log("calculate ", calculate("sub")(5)(1));

// Infinite currying
// add(1)(2)(3)...(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log("add ", add(3)(4)(3)());

//partial application - (partially applying curring) vs curring

//partial application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

//currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Real lyf example

function updateElementText(id) {
  return function (content) {
    if (typeof document !== "undefined")
      document.getElementById(id).textContent = content;
  };
}

const updateText = updateElementText("heading");
updateText("cure2");

//normal func to curry function

function curry(func) {
  return function curiedFunc(...args) {
    if (args.length >= func.length) {
      console.log("args ", ...args, args);
      return func(...args);
    } else {
      return function (...next) {
        console.log("next ", ...next);
        return curiedFunc(...args, ...next);
      };
    }
  };
}

const summ = (a, b, c, d) => a + b + c + d;
const totalSum = curry(summ);
console.log(totalSum(1)(2)(3)(4));
