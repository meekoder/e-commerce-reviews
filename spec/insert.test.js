const mongoose = require('mongoose');
const Reviews = require('../db/models/review.js');

describe('insert', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true });
  });

  afterAll((done) => {
    mongoose.disconnect(done);
  });

  it('should successfully add a review to the database', async () => {
    const review = {
      userName: 'Meeko',
      reviewDate: '2020-11-28T00:00:00.000Z',
      summary: 'Hello World',
      fullReview: 'THIS IS A TEST',
      stars: 3,
      size: 3,
      width: 4,
      comfort: 2,
      quality: 3,
      recommended: 0,
      verified: 1,
      helpfulYes: 6,
      helpfulNo: 3,
    };
    await Reviews.insertOne(review);
    const insertedReview = await Reviews.findOne({ userName: 'Meeko' });
    expect(insertedReview[0].userName).toEqual('Meeko');
    // IN PROGRESS
    // Reviews.findOne({userName: 'Meeko'})
    //   .then(reviews => {
    //     expect(reviews[0].userName).toEqual('Meeko');
    //   })
    //
    //
    // expect(insertedReview[0]).toHaveProperty('_id');
    // expect(insertedReview[0].userName).toMatchObject(review.userName);
    // expect(insertedReview.summary).toMatchObject(review.summary);
    // expect(insertedReview.fullReview).toMatchObject(review.fullReview);
  });
});

