const React = require('react');
const { Route } = require('react-router-dom');
const Home = require('../../components/home');

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Route
                    exact
                    path="/home"
                    render={(props) => <Home {...props}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = HomePage;
