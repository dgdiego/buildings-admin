const router = require('express').Router();
const React = require('react');
const {renderToString} = require('react-dom/server');
const Task = require('../../../models/task');
const View = require('./view');

router.get('/', (req, res, next) => {

    const initialState = {};

    const content = renderToString(<View initialState={initialState}/>);

    res.render('template', {
        pageName: 'to-do-list-new',
        pageTitle: 'TO-DO New',
        initialState,
        content
    });
});

module.exports = router;
