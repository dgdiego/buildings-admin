const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const todoListNewRouter = require('./pages/to-do-list-new');

const { appErrorHandler } = require('../middlewares/error-handler');

router.use('/to-do-list', todoListRouter);
router.use('/to-do-list-new', todoListNewRouter);
router.use(appErrorHandler);

module.exports = router;
