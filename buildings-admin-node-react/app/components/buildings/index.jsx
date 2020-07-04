const React = require('react');
const { Link } = require('react-router-dom');
const Layout = require('../layout');
const { get } = require('../../services/restClient');

class Buildings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        get(`/api/buildings/`)
            .then((data) => {
                this.setState({
                    buildings: data.data,
                    loading: false,
                    error: false,
                });
            })
            .catch((err) => {
                this.setState({
                    buildings: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        const buildings = this.state.buildings;
        if (this.state.loading) {
            return (
                <div className="container">
                    <div class="d-flex align-items-center">
                        <strong>Cargando edificio...</strong>
                        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            )
        }
        return (
            <Layout>
                <div className="container">
                    <div className="py-5">
                        <h1 className="d-inline">Listado de edificios</h1>
                        <Link to={`/buildings/create`}><button type="button" class="btn btn-outline-success float-right"><i className="fas fa-plus"></i> Agregar</button></Link>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Edificio</th>
                                <th scope="col">Dirección</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buildings.map(building =>
                                    <tr key={building.id}>
                                        <th scope="row">{building.id}</th>
                                        <td><Link to={`/buildings/${building.id}/apartaments`}>{building.name}</Link></td>
                                        <td>{building.address}</td>
                                        <td><span className="float-right"><Link to={`/buildings/${building.id}`} title="Editar" className="text-info"><i className="fas fa-edit"></i></Link></span></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        )
    }
};

module.exports = Buildings;
