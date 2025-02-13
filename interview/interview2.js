// Create a promise > On click of btns resolve/reject the same promise

// const btn = document.getElementById("btn");
// const btn2 = document.getElementById("btn2");

// const myPromise = new Promise((resolve, reject) => {
//   btn.addEventListener("click", () => {
//     resolve("resolved sucessfully");
//   });
//   btn2.addEventListener("click", () => {
//     reject("reject sucessfully");
//   });
// });
// myPromise
//   .then((curentState) => console.log(curentState))
//   .catch((err) => console.log(err));

// Create a promise > Without using new Promise

// Already resolved promise
// async function myFunction(params) {
//   return "Hi I am pomise without new Promise()";
// }

// const res = myFunction();
// console.log(res);

// Make it pending

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const myPromise = new Promise((resolve, reject) => {
  btn.addEventListener("click", () => {
    resolve("resolved sucessfully");
  });
  btn2.addEventListener("click", () => {
    reject("reject sucessfully");
  });
});

async function myFunction() {
  const res = await myPromise; // Does this block main thread ?
  return "Resolved externally";
}

const res = await myFunction();
console.log("res ", res);

// Make it reject
// async function myFunction(params) {
//   throw new Error("You are rejected");
// }

// const res = myFunction();
// console.log(res);
