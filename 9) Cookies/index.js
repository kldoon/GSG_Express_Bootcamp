import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));

const port = 3000;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  if (req.cookies['username']) {
    res.send("Hello " + req.cookies['username'])
  } else if (req.query.name) {
    res.cookie("username", req.query.name, {
      maxAge: 1000000
    });
  }
  res.send('Hello World!');
});


app.get('/secretData', (req, res) => {
  const authToken = req.cookies['authToken'];
  if (authToken && authToken === 'lkjlkjhUIYOLJKH(*^&(U') {
    res.send('Very Secret Data!');
  } else {
    res.status(403).send('You are not authorized, GO HOME!');
  }
});

app.post('/login', (req, res) => {
  if (req.body.username === 'ahmad' && req.body.password === '123') {
    res.cookie('username', req.body.username);
    res.cookie('authToken', 'lkjlkjhUIYOLJKH(*^&(U');
    res.status(200).send('Welcome ' + req.body.username);
  } else {
    res.status(401).send('Wrong username Or Password!');
  }
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});