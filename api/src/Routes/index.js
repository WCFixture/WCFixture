const { Router } = require('express');
const router = Router();


const matchsRoutes = require('./matchsRoutes');
const countriesRoutes = require('./countriesRoutes');
const userRoutes = require('./userRoutes');



// ROUTES:

router.use('/match', matchsRoutes)
router.use('/country', countriesRoutes)
router.use('/user', userRoutes)


module.exports = router;
