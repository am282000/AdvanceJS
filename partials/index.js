function showStudents(collegeName, studentName, age) {
  console.log(collegeName, studentName, age);
}

showStudents("IIT", "Ashish", 23); // normal call

//partial using bind

const collegeName1 = showStudents.bind(null, "TIT");
collegeName1("Panda", 22);
collegeName1("Robot", 24);

//using closures
function showStudentsClosures(collegeName) {
  return function (studentName, age) {
    console.log(collegeName, studentName, age);
  };
}

const collegeName2 = showStudentsClosures("SSD");
collegeName2("Jimmy", 5);

//pro example - taking function as input

function add(a, b, c) {
  return a + b + c;
}

function partial(fn, ...args) {
  return function (...moreArgs) {
    return fn(...args, ...moreArgs);
  };
}

const plus3 = partial(add, 1, 2);
console.log("plus3", plus3(3));

//using bind
const plus4 = add.bind(null, 1, 2);
console.log("plus4", plus4(4));
