const faker = require('faker');
const mongoose = require('mongoose');
const Reviews = require('./db/models/review.js');

mongoose.connect('mongodb://database/reviews',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to reviews DB'));

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let imageIdx = 0;
const getImage = () => {
  const images = ['https://s3-us-west-1.amazonaws.com/fec.reviews/1.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/2.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/3.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/4.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/5.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/6.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/7.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/8.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/9.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/10.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/11.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/12.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/13.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/14.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/15.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/16.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/17.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/18.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/19.jpg'];
  const image = images[imageIdx];
  imageIdx += 1;
  return image;
};

const generateReviews = (i) => {
  const seededReviews = [];
  let count = 0;
  const reviewCount = getRandomNum(20, 101);

  while (count < reviewCount) {
    seededReviews.push(
      {
        id: i,
        userName: faker.name.firstName(),
        reviewDate: faker.date.past(),
        summary: faker.lorem.sentence(),
        fullReview: faker.lorem.sentences(),
        stars: count % 25 === 0 ? 1 : getRandomNum(2, 6),
        size: getRandomNum(1, 6),
        width: getRandomNum(1, 6),
        comfort: getRandomNum(1, 6),
        quality: getRandomNum(1, 6),
        image: count % 5 === 0 ? getImage() : null,
        recommended: getRandomNum(0, 2),
        verified: getRandomNum(0, 2),
        helpfulYes: getRandomNum(0, 10),
        helpfulNo: getRandomNum(0, 10),
      },
    );
    count += 1;
  }
  const shoeReview = new Reviews.ShoeModel({ id: i, reviews: [...seededReviews] });
  return shoeReview;
};

const seedDb = async (data) => {
  try {
    await Reviews.insertOne(data);
  } catch (exception) {
    console.log(exception);
  }
};

const generateShoes = async () => {
  const reviews = [];
  for (let i = 0; i < 100; i += 1) {
    reviews.push(generateReviews(i));
  }
  await seedDb(reviews);
  mongoose.disconnect();
};

generateShoes();
