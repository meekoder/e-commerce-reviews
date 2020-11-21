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

const getHelpful = (id, cb) => {
  Reviews.findOne(id, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data[0].reviews = data[0].reviews.filter((d) => d.helpfulYes > 0);
      data[0].reviews.sort((a, b) => b.helpfulYes - a.helpfulYes);
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

const getRelevant = (id, cb) => {
  Reviews.findOne(id, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data[0].reviews = data[0].reviews.filter((d) => d.verified > 0);
      cb(null, data);
    }
  });
};

const getStars = (id, starCount, cb) => {
  Reviews.findOne(id, (err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      data[0].reviews = data[0].reviews.filter((d) => d.stars == starCount);
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
  getReviews,
  getShoeReviews,
  getHelpful,
  getNewest,
  getRelevant,
  getStars,
};
