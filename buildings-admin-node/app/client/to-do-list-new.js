const React = require('react');
const ReactDOM = require('react-dom');
const ToDoListNewPage = require('../pages/to-do-list-new/view');
const styles = require('../pages/to-do-list-new/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<ToDoListNewPage initialState={initialState}/>, document.getElementById('app'));
