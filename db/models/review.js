const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
  id: Number,
  reviews: Array,
});

const ShoeModel = mongoose.model('Shoe', shoeSchema);

const findAll = (cb) => {
  ShoeModel.find({}, cb);
};

const findOne = (id, cb) => {
  ShoeModel.find({ id }, cb);
};

const insertOne = (reviews, cb) => {
  ShoeModel.create(reviews, cb);
};

module.exports = {
  ShoeModel,
  insertOne,
  findAll,
  findOne,
};
