const express = require('express');
const cors = require('cors');
const pg = require('pg');

// Configuration de la connexion à PostgreSQL
const pgPool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});


const app = express();


app.use(express.json());
app.use(cors());

// Une route pour récupérer les tâches
app.get('/tasks', async (req, res) => {
  try {
    const { rows } = await pgPool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Une route pour ajouter une tâche
app.post('/tasks', async (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  try {
    const { rowCount } = await pgPool.query('INSERT INTO tasks(description) VALUES($1)', [description]);
    if (rowCount > 0) {
      res.status(201).json({ message: 'Task created successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
