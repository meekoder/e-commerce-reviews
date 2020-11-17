const express = require('express');
const reviewCtrl = require('../db/controllers/review.js');

const router = express.Router();

router.route('/shoes')
  .get((req, res) => {
    reviewCtrl.getReviews((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/shoes/:id')
  .get((req, res) => {
    reviewCtrl.getShoeReviews(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/shoes/:id/newest')
  .get((req, res) => {
    reviewCtrl.getNewest(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/shoes/:id/helpful')
  .get((req, res) => {
    reviewCtrl.getHelpful(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/shoes/:id/relevant')
  .get((req, res) => {
    reviewCtrl.getRelevant(req.params.id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/shoes/:id/:stars')
  .get((req, res) => {
    reviewCtrl.getStars(req.params.id, req.params.stars, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/reviews')
  .post((req, res) => {
    reviewCtrl.addReview(req.body, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

module.exports = router;
