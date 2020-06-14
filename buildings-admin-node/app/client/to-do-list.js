const React = require('react');
const ReactDOM = require('react-dom');
const ToDoListPage = require('../pages/to-do-list/view');
const styles = require('../pages/to-do-list/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<ToDoListPage initialState={initialState}/>, document.getElementById('app'));