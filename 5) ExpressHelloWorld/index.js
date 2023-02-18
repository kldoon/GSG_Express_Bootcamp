import express from 'express';

const app = express();
const port = 3000;
const host = '10.10.112.57'

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});