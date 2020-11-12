const data = require('./seed_data.js');
const mongoose = require('mongoose');
const Reviews = require('../db/models/review.js');

mongoose.connect('mongodb://localhost:27017/reviews');

const seedDb = (data) => {
  data.forEach(d => {
    const review = {
      userName: d.userName,
      reviewDate: d.reviewDate,
      summary: d.summary,
      fullReview: d.fullReview,
      stars: d.stars,
      size: d.size,
      width: d.width,
      comfort: d.comfort,
      quality: d.quality,
      recommended: d.recommended,
      helpfulYes: d.helpfulYes,
      helpfulNo: d.helpfulNo
    };
    Reviews.insertOne(review, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
};

seedDb(data);
