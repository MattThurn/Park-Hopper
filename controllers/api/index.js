const router = require('express').Router();
const userRoutes = require('./userRoutes');
const myParksRoutes = require('./myParksRoutes');
const futureRoutes = require('./futureRoutes');
const pastRoutes = require('./pastRoutes');

router.use('/users', userRoutes);
router.use('/myparks', myParksRoutes);
router.use('/futureRoutes', futureRoutes);
router.use('/pastRoutes', pastRoutes);

module.exports = router;
