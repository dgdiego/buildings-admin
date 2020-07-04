const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const buildingsRouter = require('./pages/buildings');
const paymentsRouter = require('./pages/payments');
const { appErrorHandler } = require('../middlewares/error-handler');

router.use('/to-do-list', todoListRouter);
router.use('/buildings', buildingsRouter);
router.use('/payments', paymentsRouter);
router.use(appErrorHandler);

module.exports = router;