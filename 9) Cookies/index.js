import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());

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

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});