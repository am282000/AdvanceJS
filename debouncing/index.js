let timeout = null;
const debounce = () => {
    console.log("Non delayed log !!!");
    clearTimeout(timeout);
    timeout = setTimeout(()=> delayFunc() ,3000)
}

const delayFunc = ()=>{
    console.log("Delayed function called");
}