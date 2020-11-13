const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
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
  helpfulNo: Number
});

const ReviewModel = mongoose.model('Review', reviewSchema);

const findAll = (cb) => {
  ReviewModel.find({}, cb);
};

const findOne = (query, cb) => {
  return ReviewModel.find(query, cb);
}

const insertOne = (review, cb) => {
  ReviewModel.create(review, cb);
};

module.exports = {
  insertOne,
  findAll,
  findOne
};
