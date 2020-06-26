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

const Task = require('../models/task');
router.get('/tasks', (req, res, next) => {
    Task.getAllTasks()
        .then(tasks => {
            res.json({
                tasks,
            });
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;