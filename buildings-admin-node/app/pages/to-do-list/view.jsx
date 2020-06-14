const React = require('react');
const ToDoList = require('../../components/to-do-list');

class ToDoListPage extends React.Component {
    render() {
        const { tasks } = this.props.initialState;
        return (<ToDoList tasks={tasks}/>);
    }
};

module.exports = ToDoListPage;
