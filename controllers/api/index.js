const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const myParksRoutes = require('./myParksRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/myparks', myParksRoutes);

module.exports = router;
