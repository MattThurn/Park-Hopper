const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const myParksRoutes = require('./myParksRoutes');
const futureRoutes = require('./futureRoutes');
const pastRoutes = require('./pastRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/myparks', myParksRoutes);
router.use('/futureRoutes', futureRoutes);
router.use('/pastRoutes', pastRoutes);

module.exports = router;
