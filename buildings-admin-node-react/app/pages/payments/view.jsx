const React = require('react');
const { Route } = require('react-router-dom');

const CreatePayment = require('../../components/payments/create');
const UpdatePayment = require('../../components/payments/update');
const Payments = require('../../components/payments/');


class PaymentsPage extends React.Component {
    render() {
        const { building } = this.props.initialState;
        return (
            <React.Fragment>
                <Route
                    exact
                    path="/payments/:id/create"
                    render={(props) => <CreatePayment {...props} idApto={props.match.params.id} />}
                />
                <Route
                    exact
                    path="/payments/apartament/:id" 
                    render={(props) => <Payments {...props} idApto={props.match.params.id} idBuilding={building}/>}
                />
                <Route
                    exact
                    path="/payments/:id/"
                    render={(props) => <UpdatePayment {...props} id={props.match.params.id} />}
                />
            </React.Fragment>
        );
    }
};

module.exports = PaymentsPage;
