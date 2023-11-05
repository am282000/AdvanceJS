const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// If you don't pass 3rd arg than by default it will take Event bubbling - means false value
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent clicked !!");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked !!");
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   () => {
//     console.log("child clicked !!");
//   },
//   true
// );

//Observe the flow

//Now click on Child => It will log ( grandparent> parent > child)
//Now click on parent => It will log ( grandparent > parent)
//Now click on grandparent => It will log (grandparent)


// PROBLEM
// How to stop this event propogaion
//We have access to event object in callback

grandparent.addEventListener(
    "click",
    (e) => {
      console.log("Grandparent clicked !!");
      e.stopPropagation()
    },
    true
  );
  parent.addEventListener(
    "click",
    (e) => {
      console.log("parent clicked !!");
    },
    true
  );
  child.addEventListener(
    "click",
    () => {
      console.log("child clicked !!");
    },
    true
  );
   
  // Now what if I click on child
  // It will log grandParent => than propagation is stopped
