import express from 'express';
import mysql from 'mysql2';

const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();

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
})

app.get('/students', (req, res) => {

});

app.post('/students', (req, res) => {

});

db.end();


app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
});