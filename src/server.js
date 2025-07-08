// server.js
const express = require('express');
const { poolPromise, sql } = require('./db');

const app = express();
const PORT = 3000;

app.get('/users', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM STUDENT_INFO');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
