const myName = "Mikheil Meskhi"; //string
let myHobby = "listening to music"; //string
const yearOfBirth = 1998; //number
let currentYear = 2022; //number
let student = true; //boolean
const myUndefined = undefined; //undefined
const myNull = null; //null

//method 1
console.log(
  `My name is ${myName}, I am ${
    currentYear - yearOfBirth
  } years old and my hobby is ${myHobby}.`
);

//method 2
console.log(
  "My name is " +
    myName +
    ", I am " +
    (currentYear - yearOfBirth) +
    " years old and my hobby is " +
    myHobby +
    "."
);
