const React = require('react');
const Task = require('../task');

class ToDoList extends React.Component {
    render() {
        const { tasks } = this.props;

        return (
            <ul className="to-do-list">
              {
                tasks.map(task => (
                  <Task key={task.id} id={task.id} name={task.name} description={task.description} />
                ))
              }
            </ul>
        );
    }
};

module.exports = ToDoList;
