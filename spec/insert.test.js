const { MongoClient } = require('mongodb');
const Shoe = require('../db/models/review.js');

const testData = {
  id: 101,
  reviews: [
    {
      id: 101,
      userName: 'Meeko',
      reviewDate: '2020-08-27T08:24:52.275Z',
      summary: 'Fugiat commodi error qui est quia.',
      fullReview: 'Velit doloribus qui optio sunt ut sapiente earum. Magnam repudiandae facilis qui sequi est sit. Natus dolore inventore rem quam dolor sed qui aut eaque. Id saepe sed harum suscipit deserunt autem.',
      stars: 1,
      size: 4,
      width: 3,
      comfort: 5,
      quality: 2,
      image: 'https://s3-us-west-1.amazonaws.com/fec.reviews/1.jpg',
      recommended: 1,
      verified: 0,
      helpfulYes: 4,
      helpfulNo: 6,
    },
    {
      id: 101,
      userName: 'Tim',
      reviewDate: '2020-06-03T09:57:30.547Z',
      summary: 'Et amet laboriosam.',
      fullReview: 'Eum eos id a aut. Sint nemo ratione necessitatibus. Corrupti ex tempore quam ea quis. Animi omnis cupiditate accusantium asperiores qui similique consectetur.',
      stars: 4,
      size: 2,
      width: 2,
      comfort: 2,
      quality: 3,
      image: null,
      recommended: 0,
      verified: 1,
      helpfulYes: 6,
      helpfulNo: 8,
    },
  ],
};

const invalidData = {
  id: 102,
  reviews: [
    {
      userName: 'Meeko',
      reviewDate: '2020-08-27T08:24:52.275Z',
      summary: 'Fugiat commodi error qui est quia.',
      fullReview: 'Velit doloribus qui optio sunt ut sapiente earum. Magnam repudiandae facilis qui sequi est sit. Natus dolore inventore rem quam dolor sed qui aut eaque. Id saepe sed harum suscipit deserunt autem.',
      stars: 1,
      size: 4,
      width: 3,
      comfort: 5,
      quality: 2,
      image: 'https://s3-us-west-1.amazonaws.com/fec.reviews/1.jpg',
      recommended: 1,
      verified: 0,
      helpfulYes: 4,
      helpfulNo: 6,
    },
    {
      id: 101,
      userName: 'Tim',
      reviewDate: '2020-06-03T09:57:30.547Z',
      summary: 'Et amet laboriosam.',
      fullReview: 'Eum eos id a aut. Sint nemo ratione necessitatibus. Corrupti ex tempore quam ea quis. Animi omnis cupiditate accusantium asperiores qui similique consectetur.',
      stars: 4,
      size: 2,
      width: 2,
      comfort: 2,
      quality: 3,
      image: null,
      recommended: 0,
      verified: 1,
      helpfulYes: 6,
      helpfulNo: 8,
    },
  ],
};

describe('Seeding database', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  beforeEach(async () => {
    await db.collection('shoes').deleteMany({});
  });

  it('should create & save shoe successfully', async () => {
    const shoes = db.collection('shoes');
    const validRecord = new Shoe.ShoeModel(testData);
    await shoes.insertOne(validRecord);
    const inserted = await shoes.findOne({ id: 101 });
    expect(inserted._id).toBeDefined();
    expect(inserted.reviews.length).toEqual(testData.reviews.length);
  });

  it('should insert shoe successfully, but exclude missing fields', async () => {
    const shoes = db.collection('shoes');
    const invalidRecord = new Shoe.ShoeModel(invalidData);
    await shoes.insertOne(invalidRecord);
    const insertedInvalid = await shoes.findOne({ id: 102 });
    expect(insertedInvalid._id).toBeDefined();
    expect(insertedInvalid.reviews[0].id).toBeUndefined();
  });
});
