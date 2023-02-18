import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
app.use(express.json());

const port = 3000;
const host = '127.0.0.1';

const USERS = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send(USERS);
});

app.delete('/users', (req, res) => {
  USERS.pop();
  res.send("One user deleted!")
});

app.post('/users', (req, res) => {
  console.log(req.body);
  USERS.push({
    id: req.body.id || faker.random.numeric(3),
    name: req.body.name || faker.name.fullName(),
    dob: req.body.dob || faker.date.birthdate()
  });
  res.send("User Added!");
});

app.get('/about-us', (req, res) => {
  res.send('We are a team of developers who learns ExpressJS!');
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});