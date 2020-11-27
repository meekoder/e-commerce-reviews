const Reviews = require('../models/review.js');

const getShoeReviews = (id, cb) => {
  Reviews.findOne(id, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getNewest = (id, cb) => {
  Reviews.findOne(id, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data[0].reviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
      cb(null, data);
    }
  });
};

const postHelpful = (id, username, cb) => {
  Reviews.updateHelpful(id, username, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const postNotHelpful = (id, username, cb) => {
  Reviews.updateNotHelpful(id, username, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  postHelpful,
  postNotHelpful,
  getShoeReviews,
  getNewest,
};
