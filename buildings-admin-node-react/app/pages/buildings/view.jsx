const React = require('react');
const { Route } = require('react-router-dom');
const Buildings = require('../../components/buildings');
const CreateBuilding = require ('../../components/buildings/create');
const UpdateBuilding = require ('../../components/buildings/update');
const ViewBuilding = require ('../../components/buildings/view');

const CreateApartament = require('../../components/apartaments/create');


class BuildingsPage extends React.Component {
    render() {
        const { buildings } = this.props.initialState;
        return (
            <React.Fragment>
                <Route
                    exact
                    path="/buildings"
                    render={(props) => <Buildings {...props} buildings={buildings}/>}
                />
                <Route
                    exact
                    path="/buildings/create"
                    render={(props) => <CreateBuilding {...props}/>}
                />
                <Route
                    exact
                    path="/buildings/:id" 
                    render={(props) => <UpdateBuilding {...props} id={props.match.params.id}/>}
                />

                {/*Apartaments*/}
                <Route
                    exact
                    path="/buildings/:id/apartaments" 
                    render={(props) => <ViewBuilding {...props} id={props.match.params.id}/>}
                />
                <Route
                    exact
                    path="/buildings/:id/apartaments/create" 
                    render={(props) => <CreateApartament {...props} id={props.match.params.id}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = BuildingsPage;
