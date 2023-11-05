const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// If you don't pass 3rd arg than by default it will take Event bubbling - means false value

// grandparent.addEventListener("click", () => {
//   console.log("Grandparent clicked !!");
// }, false);
// parent.addEventListener("click", () => {
//   console.log("parent clicked !!");
// }, false);
// child.addEventListener("click", () => {
//   console.log("child clicked !!");
// }, false);

//Observe the flow

//Now click on Child => It will log (child > parent > grandparent)
//Now click on parent => It will log (parent > grandparent)
//Now click on grandparent => It will log (grandparent)

//Note => Event propogation happens with a rule
// 1st event capturing happens than event bubbling happens OR (top to bottom than bottom to top)

// PROBLEM 2
grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked !!");
  },
  true
); // capture
parent.addEventListener(
  "click",
  () => {
    console.log("parent clicked !!");
  },
  false
); //bubble
child.addEventListener(
  "click",
  () => {
    console.log("child clicked !!");
  },
  false
); // bubble

//   What happen on click of child event?
// 1st capturing happens than bubbling so
//  It logs grandparent>child>parent

// PROBLEM
// How to stop this event propogaion
//We have access to event object in callback

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked !!");
  },
  false
);
parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent clicked !!");
  },
  false
);
child.addEventListener(
  "click",
  () => {
    console.log("child clicked !!");
  },
  false
);
 
// Now what if I click on child
// It will log child> parent => than propagation is stopped