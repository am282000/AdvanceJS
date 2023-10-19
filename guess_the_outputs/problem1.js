//For better outputs on screen use quokka js

var a = 10;
if (function abc() {}) {
  a += typeof abc;
}
console.log(a);  // 10undefined


//Note if any function is passed in if statement than its always true - either anonymous or name function

//Both logs fff
if(function (){}){
    console.log("fff")
}
if(function abc(){}){
    console.log("fff")
}

// But if a functionis defined outside than its type is function like
function abcd(){}
if(true){
    console.log(typeof abcd)   //function
}

//But why undefined ? because if statement will execute at runtime, and the result of log statement is already evaluated
if(function abcde(){}){
    console.log(typeof abcde)   //undefined
}