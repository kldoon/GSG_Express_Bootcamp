import express from 'express';

const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();

app.use(express.json());


app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
});