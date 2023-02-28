import { evaluate } from './bmi.js';

let BMI = 0;
const entry = {
  fullName: "",
  age: 0
};

export const calculateBMI = () => {
  entry.fullName = document.getElementById("name").value;
  entry.age = parseInt(document.getElementById("age").value);
  entry.weight = parseFloat(document.getElementById("weight").value);
  entry.height = Number(document.getElementById("height").value);
  BMI = entry.weight / Math.pow(entry.height, 2);

  const message = `Hello ${entry.fullName},<br/> your BMI is: ${BMI.toPrecision(4)}`;

  document.getElementById("result").innerHTML = message;

  const evaluation = evaluate(BMI);
  entry.status = evaluation.status;
  entry.color = evaluation.color;

  const statusMessage = `<br/>Your Status is: ${evaluation.status}`;
  document.getElementById("result").innerHTML += statusMessage;
  document.getElementById("result-bar").style.backgroundColor = evaluation.color;

  saveEntry(entry);
}

const renderList = (items) => {
  const container = document.getElementById("results-list");
  container.innerHTML = "";
  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML += `${item.fullName} | ${item.status}<span style="color:${item.color}">&#9673;</span><b onclick="deleteItem(${item.id})">X</b>`;
    container.appendChild(listItem);
  })
}

const fetchItems = () => {
  // Fetch Items from BE
  fetch('http://127.0.0.1:3000/api/entries', {
    method: 'GET'
  })
    .then(async result => {
      const entires = await result.json();
      renderList(entires);
    })
    .catch(err => {
      alert('Failed to get the entries from the database!');
    })
}

const deleteItem = (id) => {
  // Delete Item by ID
  fetch(`http://127.0.0.1:3000/api/entries/${id}`, {
    method: 'DELETE'
  })
    .then(async result => {
      if (result.status === 203) {
        alert("Entry deleted successfully!");
      }
    })
    .catch(err => {
      alert('Failed to delete the entries from the database!');
    })
}

const saveEntry = (entry) => {
  fetch('http://127.0.0.1:3000/api/entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entry)
  })
    .then(res => {
      if (res.status === 201) {
        alert('Your entry where stored in the database!');
      } else {
        alert('Failed to store the entry in the database!');
      }
    })
    .catch(err => {
      alert('Failed to store the entry in the database!');
    });
}

window.calculateBMI = calculateBMI;
window.deleteItem = deleteItem;
window.fetchItems = fetchItems;

fetchItems();