const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
  id: Number,
  reviews: Array,
});

const ShoeModel = mongoose.model('Shoe', shoeSchema);

const findAll = (cb) => {
  ShoeModel.find({}, cb);
};

const findOne = (id, cb) => {
  ShoeModel.find({ id }, cb);
};

const updateHelpful = (id, username, cb) => {
  ShoeModel.update({ 'reviews.userName': username },
    {
      $inc: {
        'reviews.$.helpfulYes': 1,
      },
    },
    (err, model) => {
      if (err) {
        console.log(err);
        cb(err, null);
      }
      cb(null, model);
    });
};

const updateNotHelpful = (id, username, cb) => {
  ShoeModel.update({ 'reviews.userName': username },
    {
      $inc: {
        'reviews.$.helpfulNo': 1,
      },
    },
    (err, model) => {
      if (err) {
        console.log(err);
        cb(err, null);
      }
      cb(null, model);
    });
};

module.exports = {
  ShoeModel,
  updateHelpful,
  updateNotHelpful,
  findAll,
  findOne,
};
