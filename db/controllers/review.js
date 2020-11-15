const Reviews = require('../models/review.js');

const getReviews = (cb) => {
  Reviews.findAll((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const addReview = (review, cb) => {
  Reviews.insertOne(review, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getHelpful = (cb) => {
  Reviews.findAll((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data = data.filter((d) => d.helpfulYes > 0);
      data.sort((a, b) => b.helpfulYes - a.helpfulYes);
      cb(null, data);
    }
  });
};

const getNewest = (cb) => {
  Reviews.findAll((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
      cb(null, data);
    }
  });
};

const getRelevant = (cb) => {
  Reviews.findAll((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data = data.filter((d) => d.verified > 0);
      cb(null, data);
    }
  });
};

module.exports = {
  getReviews,
  addReview,
  getHelpful,
  getNewest,
  getRelevant,
};
