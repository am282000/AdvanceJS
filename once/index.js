let calledOnce = false;
let calculatedData ;

const callingOnce = () =>{
    const noRecalculation = once();
    console.log("NoRecalculation", noRecalculation);
}
const once = () =>{

    if(calledOnce){
        return calculatedData; 
    }

    console.log("Calculating data .....");
    calculatedData = callMeOnce();
    calledOnce = true;
    // console.log("calculatedData", calculatedData);
    return calculatedData;
}


const callMeOnce = () =>{
    console.log("Function Called once");
    return "Ashish";
}