const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  id: Number,
  userName: String,
  reviewDate: Date,
  summary: String,
  fullReview: String,
  stars: Number,
  size: Number,
  width: Number,
  comfort: Number,
  quality: Number,
  image: String,
  recommended: Number,
  verified: Number,
  helpfulYes: Number,
  helpfulNo: Number,
});

const shoeSchema = mongoose.Schema({
  id: Number,
  reviews: Array,
});

const ShoeModel = mongoose.model('Shoe', shoeSchema);
// const ReviewModel = mongoose.model('Review', reviewSchema);

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
