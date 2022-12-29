const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const myParksRoutes = require('./myParksRoutes');
const futureRoutes = require('./futureRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/myparks', myParksRoutes);
router.use('/futureRoutes', futureRoutes);

module.exports = router;
