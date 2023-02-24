import express from 'express';

const app = express();

app.use(express.json());

const port = 3000;
const host = '127.0.0.1';

app.get('/articles/', (req, res) => {
  res.send('List of articles!');
});

app.get('/articles/:id', (req, res) => {
  res.send('Article with ID:' + req.params.id);
});

app.post('/articles', (req, res) => {
  res.send('Article Created!');
});

app.put('/articles/:id', (req, res) => {
  res.send(`Article ${req.params.id} Updated!`);
});

app.delete('/articles/:id', (req, res) => {
  res.send(`Article ${req.params.id} Deleted!`);
});

app.get('/comments/', (req, res) => {
  res.send('List of comments!');
});

app.get('/comments/:id', (req, res) => {
  res.send('Comments with ID:' + req.params.id);
});

app.post('/comments', (req, res) => {
  res.send('Comments Created!');
});

app.put('/comments/:id', (req, res) => {
  res.send(`Comments ${req.params.id} Updated!`);
});

app.delete('/comments/:id', (req, res) => {
  res.send(`Comments ${req.params.id} Deleted!`);
});


app.get('/users/', (req, res) => {
  res.send('List of users!');
});

app.get('/users/:id', (req, res) => {
  res.send('User with ID:' + req.params.id);
});

app.post('/users', (req, res) => {
  res.send('User Created!');
});

app.put('/users/:id', (req, res) => {
  res.send(`User ${req.params.id} Updated!`);
});

app.delete('/users/:id', (req, res) => {
  res.send(`User ${req.params.id} Deleted!`);
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});