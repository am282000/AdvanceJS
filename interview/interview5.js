// #Execute Promise with priority

// Given a list of promises and their priorities, call them parallelly and resolve with the value of the first promise with the most priority. If all the promises fail then reject with a custom error.

const promises = [
  { status: "resolve", priority: 4 },
  { status: "reject", priority: 1 },
  { status: "resolve", priority: 2 },
  { status: "reject", priority: 3 },
];

// We can create a promise too like this 

// new Promise((resolve, reject) => setTimeout(resolve, 500, 'First Resolve')),
//   new Promise((resolve, reject) => setTimeout(reject, 100, 'First Reject')),
//   new Promise((resolve, reject) => setTimeout(resolve, 300, 'Second Resolve')),
//   new Promise((resolve, reject) => setTimeout(reject, 400, 'Second Reject'))

const resolvedArr = [];
const rejectedArr = [];
Promise.allSettled(promises).then((val) => {
  val.forEach((res) => {
    if (res.value.status === "resolve") {
      resolvedArr.push(res.value);
    } else {
      rejectedArr.push(res.value);
    }
  });
  console.log("resolvedArr ", resolvedArr);
  console.log("rejectedArr ", rejectedArr);

  const res = resolvedArr.reduce(
    (acc, curr) => {
      if (curr.priority < acc.priority) {
        acc = curr;
      }
      return acc;
    },
    { priority: Infinity }
  );

  console.log(res);

  if (rejectedArr.length === promises.length) {
    console.log(new Error("All rejected"));
  }
});
