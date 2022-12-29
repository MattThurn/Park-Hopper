const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const myParksRoutes = require('./api/myParksRoutes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/myparks', myParksRoutes);

module.exports = router;
