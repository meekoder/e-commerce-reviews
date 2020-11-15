const express = require('express');
const reviewCtrl = require('../db/controllers/review.js');

const router = express.Router();

router.route('/reviews')
  .get((req, res) => {
    reviewCtrl.getReviews((err, data) => {
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

router.route('/5stars')
  .get((req, res) => {
    reviewCtrl.getReview({ stars: 5 }, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/4stars')
  .get((req, res) => {
    reviewCtrl.getReview({ stars: 4 }, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/3stars')
  .get((req, res) => {
    reviewCtrl.getReview({ stars: 3 }, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/2stars')
  .get((req, res) => {
    reviewCtrl.getReview({ stars: 2 }, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/1stars')
  .get((req, res) => {
    reviewCtrl.getReview({ stars: 1 }, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/helpful')
  .get((req, res) => {
    reviewCtrl.getHelpful((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/newest')
  .get((req, res) => {
    reviewCtrl.getNewest((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/relevant')
  .get((req, res) => {
    reviewCtrl.getRelevant((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

module.exports = router;
