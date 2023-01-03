const router = require('express').Router();
const { Past } = require('../../models');
const withAuth = require('../../utils/auth');


//router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
  try {
    const newPast = await Past.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPast);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const pastData = await Past.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!pastData) {
      res.status(404).json({ message: 'No past trip found with this id!' });
      return;
    }

    res.status(200).json(pastData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;