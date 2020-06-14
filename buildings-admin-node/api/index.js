const router = require('express').Router();
const buildingRouter = require('./buildings');
const contributionTypesRouter = require('./contribution-types');
const apartamentsRouter = require('./apartaments');
const paymentsRouter = require('./payments');
const expensesRouter = require('./expenses');
const fundsRouter = require('./funds');
const { apiErrorHandler } = require('../middlewares/error-handler');

router.use('/buildings', buildingRouter);
router.use('/contributionTypes', contributionTypesRouter);
router.use('/apartaments/', apartamentsRouter);
router.use('/payments/', paymentsRouter);
router.use('/expenses/', expensesRouter);
router.use('/funds/', fundsRouter);
router.use(apiErrorHandler);

module.exports = router;