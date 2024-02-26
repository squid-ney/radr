import {db} from './db/db.js'
import express from 'express'

const app = express();

const knexDB = new db().getDB();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/variants', async (req,res) => {
  const results = await knexDB.select('*').from('variants')
  res.send(results)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});