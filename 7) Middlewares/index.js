import express from 'express';
import { faker } from '@faker-js/faker';
import cors from 'cors';
import { logger, printBye, printHi, requestTime } from './middlewares.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', logger);
app.use('/posts', logger);

const port = 3000;
const host = '127.0.0.1';

const USERS = [];

app.use((req, res, next) => {
  console.log("Before====");
  res.on("finish", () => {
    console.log("After====");
  });
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send(USERS);
});

app.post('/users', printHi, (req, res, next) => {
  USERS.push({
    id: req.body.id || faker.random.numeric(3),
    name: req.body.name || faker.name.fullName(),
    dob: req.body.dob || faker.date.birthdate()
  });
  next();
  res.send("User Added!");
}, printBye);

app.post('/users/batch', requestTime, (req, res, next) => {
  const count = Number(req.query.count) || 1;

  for (let i = 0; i < count; i++) {
    USERS.push({
      id: req.body.id || faker.random.numeric(3),
      name: req.body.name || faker.name.fullName(),
      dob: req.body.dob || faker.date.birthdate()
    });
  }

  next();
  res.send(`${count} User/s Added!`);
}, requestTime);

app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const userIndex = USERS.findIndex(item => item.id === id);
  if (userIndex >= 0) {
    USERS.splice(userIndex, 1);
    res.send("One user deleted!")
  } else {
    res.send("User Not found!")
  }
});

app.get('/about-us', (req, res) => {
  res.send('We are a team of developers who learns ExpressJS!');
});

app.all('*', (req, res) => {
  res.status(404);
  res.send("Man I didn't create that yet go home");
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});