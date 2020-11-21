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

const addHelpful = (id, username, cb) => {
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

module.exports = {
  ShoeModel,
  addHelpful,
  findAll,
  findOne,
};
