const onMount = () =>{
    // 1st approach to memoize a function
    const memoizedCallback = memoizedMultiplyBy10();
    console.log(memoizedCallback(10));
    console.log(memoizedCallback(4));
    console.log(memoizedCallback(5));
    console.log(memoizedCallback(10));
    console.log(memoizedCallback(5));

    console.log("_______________________");

    //2nd aproach to make a function to memoize other functions
    const memoizeAdd = memoize(add);
    console.log(memoizeAdd(1,2,3));
    console.log(memoizeAdd(1,2,2));
    console.log(memoizeAdd(1,2,3,5));
    console.log(memoizeAdd(1,2,3,5));

    console.log("_______________________");


    const memoizeFib = memoize(fib);
    console.log(memoizeFib(40));
    console.log(memoizeFib(40));
    console.log(memoizeFib(40));
    // console.log(fib(40));
    // console.log(fib(40));
    // console.log(fib(40));
    // console.log(memoizeFib(40));
    // console.log(memoizeFib(40));
}

const memoizedMultiplyBy10 = () =>{
    let cache ={};

    return (num)=>{
        if(num in cache){
            console.log("Memoized ", cache);
            return cache[num];
        }

        const result = num *10;
        cache[num] = result;
        return result
    }
}



const add = (...args) =>{
    return args.reduce((acc,curr)=> acc +curr,0)
}

const fib = (num) => {
    if(num <2) return num;
    return fib(num -1) + fib(num-2)
}

// Fuction to memoize any function - Decorator function

const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        if(args in cache){
            console.log("Cached/ Memoized function ",cache);
            return cache[args.toString()]
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}



document.addEventListener('DOMContentLoaded', onMount);