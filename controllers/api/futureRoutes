const router = require('express').Router();
const { Future } = require('../../models');
const withAuth = require('../../utils/auth');


//router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
  try {
    const newTrip = await Future.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;