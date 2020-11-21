const express = require('express');
const reviewCtrl = require('../db/controllers/review.js');

const router = express.Router();

router.route('/products/:id')
  .get((req, res) => {
    reviewCtrl.getShoeReviews(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/products/:id/reviews')
  .get((req, res) => {
    reviewCtrl.getNewest(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/products/:id/reviews/:stars')
  .get((req, res) => {
    reviewCtrl.getStars(req.params.id, req.params.stars, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/products/:id/:username/helpful')
  .post((req, res) => {
    reviewCtrl.postHelpful(req.params.id, req.params.username, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/products/:id/:username/nothelpful')
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
