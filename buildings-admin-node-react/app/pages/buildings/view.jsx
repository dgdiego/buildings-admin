const React = require('react');
const { Route } = require('react-router-dom');
const Buildings = require('../../components/buildings');
//const TaskDetail = require ('../../components/task-details');
//const NewTask = require ('../../components/new-task')

class BuildingsPage extends React.Component {
    render() {
        const { buildings } = this.props.initialState;
        return (
            /*<React.Fragment>
                <Route
                    path="/to-do-list/task/:id"
                    render={(props) => <TaskDetail {...props} id={props.match.params.id}/>}
                />
                <Route
                    exact
                    path="/to-do-list"
                    render={(props) => <ToDoList {...props} tasks={tasks}/>}
                />
                <Route
                    exact
                    path="/to-do-list/new"
                    render={(props) => <NewTask {...props} tasks={tasks}/>}
                />
            </React.Fragment>*/
            <React.Fragment>
                <Route
                    exact
                    path="/buildings"
                    render={(props) => <Buildings {...props} buildings={buildings}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = BuildingsPage;
