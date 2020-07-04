const React = require('react');
const { Link } = require('react-router-dom');
const { Redirect } = require('react-router-dom');
const { post } = require('../../../services/restClient');

class CreatePayment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            amount: '',
            redirect: null,
            error: false,
            message: ''
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(event) {
        this.setState({
            date: event.target.value
        });
    }

    handleAmountChange(event) {
        this.setState({
            amount: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        post({
            url: `/api/payments/create`,
            method: 'POST',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                apartament_id: this.props.idApto,
                date: this.state.date,
                amount: this.state.amount
            })
        }).then((data) => {
            this.setState({
                redirect: true
            });
        }).catch((err) => {
            this.setState({
                error: true,
                message: err.message
            });
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/payments/apartament/${this.props.idApto}`} />
        }
        return (
            <div>
                <div className="container">
                    <div className="py-5">
                        <h2 className="d-inline">Agregar pago</h2>
                        <Link to={`/payments/apartament/${this.props.idApto}`} ><button type="button" class="btn btn-outline-primary float-right"><i className="fas fa-undo"></i> Volver</button></Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="date">Fecha</label>
                            <input type="date" class="form-control col-3" id="date" name="date" value={this.state.date} required onChange={this.handleDateChange} />
                        </div>
                        <div class="form-group">
                            <label for="amount">Monto</label>
                            <input type="number" class="form-control col-3" id="amount" name="amount" value={this.state.amount} required onChange={this.handleAmountChange} />
                        </div>
                        <button type="submit" class="btn btn-success">Agregar</button>
                    </form>
                    {this.state.error &&
                            <div className="form-group">
                                <div class="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        }
                </div>
            </div>
        );
    }
};

module.exports = CreatePayment;
