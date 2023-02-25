import express from 'express';
import mysql from 'mysql2';

const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'gsg_db_express'
});

db.connect((err) => {
  if (!err) {
    console.log('Connected to MySQL server');
  } else {
    console.log(`Failed to Connect to MySQL server, ${err.message}`);
  }
});

app.get('/students', (req, res) => {
  db.query('SELECT * FROM  students WHERE gpa>=4.0', (err, values) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong! " + err.message);
    } else {
      res.status(200).send(values);
    }
  });
});

app.post('/students', (req, res) => {
  if (!req.body.id || !req.body.name) {
    res.status(400).send("Id and Name are required!");
  } else {
    const id = req.body.id;
    const name = req.body.name;
    const gpa = req.body.gpa || 0;
    const is_graduated = req.body.is_graduated || false;
    const values = [id, name, gpa, is_graduated];

    db.query(
      "INSERT INTO students VALUES (?, ?, ?, ?)",
      values,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong! " + err.message);
        } else {
          res.status(201).send(`${result.affectedRows} Student/s Inserted!`);
        }
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
});