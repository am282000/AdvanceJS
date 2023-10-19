//Pollyfills

//You need to create your own bind method
// Bind (object who is refer this, normal arguements)

let name = {
  firstName: "Ashish",
  lastName: "Madaan",
};

const printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " " +
      state +
      " " +
      country
  );
};

const myName = printName.bind(name, "Noida", "UP");
myName("India");

//Now we have create our own bind methods
//Steps observe bind carefully:
// 1) Globally available can be attached to any function
//  - Function.proptype to make it globally availabel for all function
// 2) Return a function so that it can be later invoked/call
// 3) If we call that return function than it will call function printName
// - on whichever function I call my method mybind "this" keyword will refer to the function on whon it is called like printName here
// 4) bind takes 1 arg as reference to this object , rest are normal args
// - 1st arg of ..args is always the refernece to "this" object
// 5) We need all the normal args excluding "this" reference args i.e. on 0 index
// - Do slice of args in params from 1 to end
//6) We need to handle multiple args nnow
// - Instead of call method use apply method because it ake array
// 7 ) There is no surity that I pass all args at the time of binding only , I can also pass in returned Func call
//  - yourName is the retured func for
//  return function () {
//     referenceOnWhichFuncCalled.apply(args[0], params);
// };
// so it will recieves its args here only
//8) Now we have 2 different types of args 1 in mybind, 2din call od returnedfunc i.e. yourName
// - apply method take array so give it a concatenated array for both args

Function.prototype.mybind = function (...args) {
  //   console.log("this", this);
  //   console.log("args", args);
  let referenceOnWhichFuncCalled = this;
  let params = args.slice(1);
  return function (...newArgs) {
    params = params.concat(newArgs);
    referenceOnWhichFuncCalled.apply(args[0], params);
    // referenceOnWhichFuncCalled.apply(args[0], [...params,...newArgs] );
  };
};

const yourName = printName.mybind(name, "Noida", "UP");
yourName("India");
