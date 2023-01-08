const router = require('express').Router();
const { Past, Future, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/past-trips', withAuth, async (req, res) => {
  try {
    const pastData = await Past.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const pastVisits = pastData.map((past) => past.get({ plain: true }));

    res.render('pasttrips', {
      pastVisits,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/planned-trips', withAuth, async (req, res) => {
  try {
    const futureData = await Future.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const futureVisits = futureData.map((future) =>
      future.get({ plain: true })
    );

    res.render('plannedtrips', {
      futureVisits,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add-a-trip', withAuth, async (req, res) => {
  try {
    res.render('addatrip', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', async (req, res) => {
  try {
    res.render('register', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const pastData = await Past.findAll({});

    const pastVisits = pastData.map((past) => past.get({ plain: true }));

    res.render('homepage', {
      pastVisits,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
