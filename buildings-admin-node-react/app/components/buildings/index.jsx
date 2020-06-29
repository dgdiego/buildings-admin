const React = require('react');
const { Link } = require('react-router-dom');

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
        fetch(`/api/buildings/`)
            .then(res => res.json()).then((data) => {
                this.setState({
                    buildings: data.data,
                    loading: false,
                    error: false,
                });
            })
            .catch((err) => {
                console.error(err);
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
            return <div>Cargando edificios ...</div>
        }
        return (
            <div class="ui text container">
                <h1>Listado de edificios</h1>

                <div role="list" class="ui divided middle aligned list">
                    {
                        buildings.map(building =>
                            <div role="listitem" class="item" key={building.id}>
                                <div class="right floated content">
                                    <button class="ui button">
                                        <Link to={`/buildings/${building.id}`}>Editar</Link>
                                    </button>
                                </div>
                                <img src="https://picsum.photos/200" class="ui avatar image" />
                                <div class="content">ID: {building.id} - Nombre: {building.name}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
};

module.exports = Buildings;
