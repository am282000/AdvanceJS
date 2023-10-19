//Start with small Unary(one parameters) functions

const add2 = (num) => num + 2;
const subtract1 = (num) => num - 1;
const multiply5 = (num) => num * 5;

// How function will exexute is (inside to outside) or (right to left)

const result = multiply5(subtract1(add2(4)));
console.log("result", result);

// Make our own compose/pipe function

// Compose = read arguement s from right to left => i.e. inside to outside
// pipe = read arguments from left to right => i.e. outside to inside

// here
// ...fns => is all functions requested like add2, subtract1, multiply5,
// x is the initial val provided
function pipe(...fns) {
  return function (x) {
    return fns.reduce((currVal, currFuncs) => currFuncs(currVal), x);
  };
}

const res = pipe(add2, subtract1, multiply5)(5); // 5+2 = 7   7-1 = 6   6*5 =30
console.log("res", res);

// ComposeFunc - execution right to left

function compose(...fns) {
  return function (x) {
    return fns.reduceRight((currVal, currFuncs) => currFuncs(currVal), x);
  };
}

const resCompose = compose(add2, subtract1, multiply5)(5); // 5*5 = 25    25-1 = 24  24+2 = 26
console.log("resCompose", resCompose);
