const React = require('react');
const {Link} = require ('react-router-dom');

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
            .then(res => res.json()).then((data) =>{
            this.setState({
                buildings: data.buildings,
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
        const buildings  = this.state.buildings;
        if (this.state.loading) {
            return <div>Cargando edificios ...</div>
        }
        return (
            <div>
                <h1>Listado de edificios</h1>
                
                <ul>
                    {
                        buildings.map(building => 
                        <li>ID: {building.id} - Nombre: {building.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
};

module.exports = Buildings;
