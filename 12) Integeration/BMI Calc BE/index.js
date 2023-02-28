import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import entryRouter from './routes/entry.route.js';

const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();

app.use(cors());
app.use(express.json());

db.sequelize.sync()
  .then(() => {
    console.log("DB Sync Done Successfully!")
  })
  .catch((err) => {
    console.log(`Failed to Sync with DB: ${err.message}`);
  });

app.use("/api/entries", entryRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`)
});