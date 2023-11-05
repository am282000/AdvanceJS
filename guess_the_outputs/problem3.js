var bar = function foo() {
    return true
}

//Because a function defination can only have a single reference variable
console.log(foo());  // Foo is not defined reference error 
console.log(bar());  // This is correct and result true