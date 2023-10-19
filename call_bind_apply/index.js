let name = {
  firstName: "Ashish",
  lastName: "Madaan",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.fullName();

let name2 = {
  firstName: "New",
  lastName: "Name",
};

// I want to print fullName wthout copying the code !!
// I need to borrow the fullName function from name1
//Function borrowing or call

//Which function you want to call followed by .call then object name whose this keyword you want to access in calling
name.fullName.call(name2);

// In real lyf we don't create function inside objects instead

let name3 = {
  firstName: "Hi",
  lastName: "Madaan",
};
let name4 = {
  firstName: "Hello",
  lastName: "name",
};

let fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

fullName.call(name3);
fullName.call(name4);

//What if we have some parameters also needed in function

let nameWithLocation = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

//1st arg is whose this is the reference here, rest are func args
nameWithLocation.call(name3, "Noida", "UP");

//If I don't pass any argument of function than it will print undefined
// To avoid undefined we can give default value to state = "UP" in parameters

//Apply methods - same as call
// - 1st is reference to this
// 2nd is list of arguements
//Need to take different parameters to recieve all args

let applyMethod = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

applyMethod.apply(name4, ["zimbawe", "India"]);

//Bind
// Same as call => but instead it will return an function which can be called later
//1st arg is the object for which "this" is reference, all n no. of other args (, seprated)
//GIves you a copy of function - o call anytime

let name5 = {
  firstName: "Ashish",
  lastName: "Madaann ji",
};

const bindMethod = function (pet) {
  console.log(`${this.firstName} ${this.lastName} favourite's pet is ${pet}`);
};

const returnedBindFunction = bindMethod.bind(name5, "panda");
returnedBindFunction();
