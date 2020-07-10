const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const buildingsRouter = require('./pages/buildings');
const paymentsRouter = require('./pages/payments');
const loginRouter = require('./pages/login');
const homeRouter = require('./pages/home');
const { appAutentication } = require('../middlewares/permission');
const { appErrorHandler } = require('../middlewares/error-handler');

router.use(appAutentication);

router.use('/login', loginRouter);
router.use('/home', homeRouter);
router.use('/to-do-list', todoListRouter);
router.use('/buildings', buildingsRouter);
router.use('/payments', paymentsRouter);
router.use(appErrorHandler);

module.exports = router;