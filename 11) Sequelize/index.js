import express from 'express';
import db from './models/index.js';

const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();

app.use(express.json());

db.sequelize.sync()
  .then(() => {
    console.log("DB Sync Done Successfully!")
  })
  .catch((err) => {
    console.log(`Failed to Sync with DB: ${err.message}`);
  });

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
});