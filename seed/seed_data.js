const faker = require('faker');

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
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
      image: count % 3 === 0 ? faker.image.imageUrl() : null,
      recommended: getRandomNum(0, 2),
      verified: getRandomNum(0, 2),
      helpfulYes: getRandomNum(0, 10),
      helpfulNo: getRandomNum(0, 10)
    }
  );
  count++;
}

module.exports = seededReviews;
