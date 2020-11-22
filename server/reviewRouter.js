const express = require('express');
const path = require('path');
const reviewCtrl = require('../db/controllers/review.js');

const router = express.Router();

router.route('/:id').get(async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.route('/:id')
  .get((req, res) => {
    reviewCtrl.getShoeReviews(req.params.id, async (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/:id/reviews')
  .get((req, res) => {
    reviewCtrl.getNewest(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/:id/reviews/:stars')
  .get((req, res) => {
    reviewCtrl.getStars(req.params.id, req.params.stars, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/:id/:username/helpful')
  .post((req, res) => {
    reviewCtrl.postHelpful(req.params.id, req.params.username, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/:id/:username/nothelpful')
  .post((req, res) => {
    reviewCtrl.postNotHelpful(req.params.id, req.params.username, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

module.exports = router;
