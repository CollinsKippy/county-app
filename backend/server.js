const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// console.log('MONGO_URI is: ', process.env.MONGO_URI);

app.use('/api/counties', require('./routes/countyRoutes'));
app.use('/api/mountains', require('./routes/mountainRoutes'));
app.use('/api/lakes', require('./routes/lakeRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
