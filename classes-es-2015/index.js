class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //Instance Method - TO use this we need instance of our class i.e. new Student
  fullName() {
    return `Hi, ${this.firstName} ${this.lastName} this side........`;
  }

  //Static Method - TO use this we don't need instance of our class, we can use class name directly i.e. Student
  static printName(firstName, lastName) {
    return `Hi I am static method called by ${firstName} ${lastName}`;
  }
}

let student1 = new Student("Ashish", "Madaan");
let student2 = new Student("Desi", "Chauhan");

console.log(student1, student2);
console.log(student1.fullName());
console.log(Student.printName("Maddy", "Rockstar"));
