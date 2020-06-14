const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const Task = require('../../../models/task');
const View = require('./view');

router.get('/', (req, res, next) => {
    Task.getAllTasks()
      .then(tasks => {
        const initialState = {
          tasks,
        };

        const content = renderToString(<View initialState={initialState}/>);

        res.render('template', {
          pageName: 'to-do-list',
          pageTitle: 'TO-DO List',
          initialState,
          content
        });
      })
      .catch(err => {
        next(err);
      });
});

module.exports = router;