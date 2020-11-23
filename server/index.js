const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const reviewRouter = require('./reviewRouter.js');

const app = express();
const port = 3004;

mongoose.connect('mongodb://database/reviews',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.use(express.static(`${__dirname}/../public`));
    app.use(parser.json());
    app.use('/api/products', reviewRouter);
    app.get('/:itemId', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });
