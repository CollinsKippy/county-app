const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Success, my people!' });
});

app.get('/api/counties', (req, res) => {
  return res.status(200).json({ message: 'Counties List' });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
