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
  recommended: Number,
  helpfulYes: Number,
  helpfulNo: Number
});

const ReviewModel = mongoose.model('Review', reviewSchema);

const insertOne = (review, cb) => {
  ReviewModel.create(review, cb);
};

module.exports = {insertOne};
