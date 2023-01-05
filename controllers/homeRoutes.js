const router = require('express').Router();
const { Past, Future, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/past-trips', withAuth, async (req, res) => {
  try {
    // Get all past and JOIN with user data
    const pastData = await Past.findAll({
    where: {
      user_id: req.session.user_id
    }
    });

    // Serialize data so the template can read it
    const pastVisits = pastData.map((past) => past.get({ plain: true }));

    // Pass serialized data and session flag into template
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
    // Get all past and JOIN with user data
    const futureData = await Future.findAll({
    where: {
      user_id: req.session.user_id
    }
    });

    // Serialize data so the template can read it
    const futureVisits = futureData.map((future) => future.get({ plain: true }));

    // Pass serialized data and session flag into template
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
    // Pass serialized data and session flag into template
    res.render('addatrip', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {
  try {
    // Get all past and JOIN with user data
    const pastData = await Past.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const pastVisits = pastData.map((past) => past.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      pastVisits,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



/*  
// PRETTY SURE WE CAN DELETE ALL THIS, 
// BUT KEEPING IT COMMENTED OUT FOR NOW JUST IN CASE

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/myparks');
    return;
  }

  res.render('login');
});
 */

module.exports = router;
