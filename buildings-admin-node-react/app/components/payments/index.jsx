const React = require('react');
const { Link } = require('react-router-dom');
const { Redirect } = require('react-router-dom');
const { get } = require('../../services/restClient');

class Payments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            payments: null,
            error: false,
            message: ''
        };
    }

    componentDidMount() {
        get(`/api/payments/apartament/${this.props.idApto}`)
            .then((data) => {
                this.setState({
                    payments: data.data,
                    loading: false,
                    error: false,
                    message: '',
                });
            }).catch((err) => {
                this.setState({
                    payments: null,
                    loading: false,
                    error: true,
                    message: err.message
                });
            });
    }

    render() {
        const payments = this.state.payments;
        const idApto = this.props.idApto;

        if (this.state.loading) {
            return (
                <div className="container">
                    <div class="d-flex align-items-center">
                        <strong>Cargando pagos...</strong>
                        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="py-5">
                                <h2 className="d-inline">Pagos</h2>
                                <Link to={`/buildings`}><button type="button" class="btn btn-outline-primary float-right"><i className="fas fa-undo"></i> Volver</button></Link>
                            </div>
                        </div>
                    </div>

                    {/*<div class="card">
                        <div class="card-header">
                        <i className="fas fa-building"></i> {building.name}
                        </div>
                        <div class="card-body">
                            <p class="card-text"><i className="fas fa-map-marker-alt"></i> {building.address}</p>
                        </div>
                    </div>
                    
                    {this.state.error &&
                        <div className="form-group">
                            <div class="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    }
                    */}

                    <div className="py-5">
                        <h2 className="d-inline">Listado de pagos</h2>
                        <Link to={`/payments/${idApto}/create`}><button type="button" class="btn btn-outline-success float-right"><i className="fas fa-plus"></i> Agregar</button></Link>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Importe</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(payment =>
                                    <tr key={payment.id}>
                                        <th scope="row">{payment.date}</th>
                                        <td>{payment.amount}</td>
                                        <td>
                                            <span className="float-right">
                                                pp
                                            </span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

module.exports = Payments;
