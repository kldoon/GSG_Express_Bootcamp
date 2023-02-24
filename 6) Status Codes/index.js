import express from 'express';
import { validateUserObject } from './validator.js'

const app = express();
app.use(express.json());

const port = 3000;
const host = '127.0.0.1';

const USERS = [];

app.get('/users', (req, res) => {
  if (req.headers.username !== 'ahmad') {
    res.status(403).send();
  } else {
    res.status(200);
    res.send([]);
  }
  // res.status(200).send([]);
});

app.post('/users', (req, res) => {
  const validationRes = validateUserObject(req.body);
  if (req.headers.username !== 'ahmad') {
    res.status(403).send();
  } else if (validationRes) {
    // if the object is invalid
    res.status(400).send(validationRes);
  } else {
    // Create user
    res.status(201).send();
  }
});

app.all('*', (req, res) => {
  res.status(404);
  res.send("Man I didn't create that yet go home");
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});