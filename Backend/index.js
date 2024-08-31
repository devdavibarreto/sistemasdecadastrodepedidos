const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set our postgres environement
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'postgresqls',
  database: 'bdtuto',
  password: 'password',
  port: 5432,
})

//Index Route
app.get('/', async(req, res) => {
  const { rows } = await pool.query('select * from dockerpoint')
  res.send(rows)
});

const port = process.env.PORT || 3150;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
}); 