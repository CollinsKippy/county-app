const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log('env is: ', app.get('env'));

app.use('/api/counties', require('./routes/countyRoutes'));
app.use('/api/mountains', require('./routes/mountainRoutes'));
app.use('/api/lakes', require('./routes/lakeRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
