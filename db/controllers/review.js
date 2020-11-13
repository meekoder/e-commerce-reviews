const Reviews = require('../models/review.js');

const getReviews = (cb) => {
  Reviews.findAll((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      console.log(data);
      cb(null, data);
    }
  });
};

const getReview = (query, cb) => {
  Reviews.findOne(query, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      console.log(data);
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
      console.log(data);
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
      data = data.filter(d => d.helpfulYes > 0);
      data.sort((a, b) => {
        return b.helpfulYes - a.helpfulYes;
      });
      cb(null, data);
    }
  })
};

const getNewest = (cb) => {
  Reviews.findAll((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data.sort((a, b) => {
        return new Date(b.reviewDate) - new Date(a.reviewDate);
      });
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
      data = data.filter(d => d.verified > 0);
      cb(null, data);
    }
  });
};

module.exports = {
  getReviews,
  getReview,
  addReview,
  getHelpful,
  getNewest,
  getRelevant
};
