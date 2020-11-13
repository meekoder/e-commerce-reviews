const express = require('express');
const parser = require('body-parser');
const reviewRouter = require('./reviewRouter.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reviews');
const app = express();

const port = 3000;

app.use(parser.json());
app.use('/api', reviewRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
