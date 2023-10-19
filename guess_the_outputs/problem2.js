//Use quokka js get inline outputs

//Variation 1
var Student = {
  college: "IIT",
};
let student1 = Object.create(Student); //Note this create a blank obj who have access to Student obj keys
console.log(student1); // {}
delete student1.college; // This is just to confuse student1 doesn't have any key of college
console.log(student1.college); //IIT

// Variation 2

var Student = {
  college: "KUK",
};
let student2 = Object.create(Student); //Note this create a blank obj who have access to Student obj keys
console.log(student2); // {}
delete Student.college; // THis will actually delete the reference of key from Student obj , so you can't acces it in even student2
console.log(student2.college); //undefined

// Variation 3

var Student = {
  college: "NIT",
};
let student3 = Object.create(Student); //Note this create a blank obj who have access to Student obj keys
console.log(student3); // {}
student3.college = "student3 own key";
delete Student.college; // Not effective now because you we added new key in student3 tha is given priority now
console.log(student3.college); //student3 own key
