import { evaluate } from './bmi.js';

let BMI = 0;
const person = {
  name: "",
  age: 0
};

// const message = "Hello " + person.name + ", your BMI is: " + BMI;

// function calculate1(num1, num2) {  // ES5 Syntax
//   console.log("Calculated: " + (num1 + num2));
//   return "Calculated: " + (num1 + num2);
// }

export const calculateBMI = () => {  // ES6 Syntax
  person.name = document.getElementById("name").value;
  person.age = parseInt(document.getElementById("age").value);
  person.weight = parseFloat(document.getElementById("weight").value);
  person.height = Number(document.getElementById("height").value);
  BMI = person.weight / Math.pow(person.height, 2);

  const message = `Hello ${person.name}, your BMI is: ${BMI.toPrecision(4)}`;

  document.getElementById("result").innerText = message;

  const status = evaluate(BMI);
  const statusMessage = `<br/>Your Status is: ${status}`;
  document.getElementById("result").innerHTML += statusMessage;
  console.log(JSON.stringify(person));
}

window.calculateBMI = calculateBMI;

const loadPersons = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      res.json().then(persons => {
        console.log(persons);
      });
    }).catch(err => {
      console.log("Something went wrong!!!!");
    });
}

const loadPersons2 = async () => {
  try {
    const res = await fetch("https://xjsonplaceholder.typicode.com/users");
    const persons = await res.json();
    console.log(persons);
  } catch (error) {
    console.log("Something went wrong!!!!");
  }
}

loadPersons2();