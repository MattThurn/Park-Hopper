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

// router.delete('/:id', withAuth, async (req, res) => {
  router.delete('/:id', async (req, res) => {
    try {
      const futureData = await Future.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      /* DELETE TRIP BY ID BY USER
        const futureData = await Future.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }); */
  
      if (!futureData) {
        res.status(404).json({ message: 'No past trip found with this id!' });
        return;
      }
      
      res.status(200).json(futureData);
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;