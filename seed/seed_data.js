const faker = require('faker');

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let imageIdx = 0;
const getImage = () => {
  const images = ['https://s3-us-west-1.amazonaws.com/fec.reviews/1.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/2.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/3.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/4.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/5.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/6.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/7.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/8.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/9.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/10.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/11.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/12.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/13.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/14.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/15.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/16.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/17.jpeg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/18.jpg', 'https://s3-us-west-1.amazonaws.com/fec.reviews/19.jpg'];
  const image = images[imageIdx];
  imageIdx++;
  return image;
};

let seededReviews = [];
let count = 0;

while (count < 100) {
  seededReviews.push(
    {
      userName: faker.name.firstName(),
      reviewDate: faker.date.past(), 
      summary: faker.lorem.sentence(),
      fullReview: faker.lorem.sentences(),
      stars: getRandomNum(1, 6),
      size: getRandomNum(1, 6),
      width: getRandomNum(1, 6),
      comfort: getRandomNum(1, 6),
      quality: getRandomNum(1, 6),
      image: count % 5 === 0 ? getImage() : null,
      recommended: getRandomNum(0, 2),
      verified: getRandomNum(0, 2),
      helpfulYes: getRandomNum(0, 10),
      helpfulNo: getRandomNum(0, 10)
    }
  );
  count++;
}

module.exports = seededReviews;
