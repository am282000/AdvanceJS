// Curring using Bind method
//Bind creates the copy of function => To make it curry we preset some args

//Normal func
const multiply = function (a, b) {
  console.log(a * b);
};

multiply(2, 3);

//Currying
const multiplyByTwo = multiply.bind(this, 2); // this means presetting a = 2 always
multiplyByTwo(4);

const multiplyByThree = multiply.bind(this, 3); // this means presetting a = 3 always
multiplyByThree(4);

//Also we can use it like this
const multiplyByFour = multiply.bind(this, 4, 4); // this means presetting a = 4 and b = 4 always
multiplyByFour(5); // this arg is neglected eiher give it or not

const multiplyByFive = multiply.bind(this);
multiplyByFive(5, 5); // this means presetting a = 5 and b = 5 always

// Curring using closures

const multiplyUsingClosure = function (a) {
  return function (b) {
    console.log(a * b);
    // return (a * b);
  };
};

const multiplyByTwoUsingClosure = multiplyUsingClosure(2);
multiplyByTwoUsingClosure(3);
const multiplyByThreeUsingClosure = multiplyUsingClosure(3, 0, 10, 12); // this will take a = 3 i.e. first arg always as per our current implementation
multiplyByThreeUsingClosure(9); // this is hte 2nd arg



// Question 1 - add all the given args

// add(1)(2)(3)();  = 6
// add(5)(10)(-2)(7)();  = 20


//NAIVE APROACH BUT I WILL WORK ONLY FOR 3  PARAMETERS ONLY
function add(a) {
    return function(b){
        return function(c){
            return function(){
                return a+b+c;
            };
        }
    }
}

console.log(add(1)(2)(3)());

// Work with n no of arguements ..... !!

function dynamicAdd(a){
    return function(b) {
        if(b) return dynamicAdd(a+b)
        else return a;
    }
}

// add(2)(5)(7)(9)()
// add(7)(7)(9)
// add(14)(9)
// add(21)
// if !b => else => return 23

console.log(dynamicAdd(2)(5)(7)(9)())  