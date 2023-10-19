let executeFunc = false;
const throttle = () =>{
    
    if(executeFunc){
        return;
    }
    
    executeFunc = true;

    setTimeout(() => {
        myFunction();
        executeFunc = false;
    }, 3000);
}

const myFunction = () =>{
    console.log("Throttled Function executed");
}