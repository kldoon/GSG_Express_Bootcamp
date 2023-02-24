import express from 'express';
import articles from './controllers/articles.js';
import comments from './controllers/comments.js'
import users from './controllers/users.js'

const app = express();

app.use(express.json());

const port = 3000;
const host = '127.0.0.1';

app.use('/articles', articles);
app.use('/comments', comments);
app.use('/users', users);

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
});