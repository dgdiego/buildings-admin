const React = require('react');
const { Link } = require('react-router-dom');
const { Redirect } = require('react-router-dom');
const { Container, Button, Form, Header } = require('semantic-ui-react');

class UpdateBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            building: null,
            name: '',
            address: '',
            redirect: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`/api/buildings/${this.props.id}`)
            .then(res => res.json()).then((data) => {
                if (data.status == 200) {
                    this.setState({
                        building: data.data,
                        name: data.data.name,
                        address: data.data.address,
                        loading: false,
                        error: false,
                    });
                } else {
                    this.setState({
                        error: true
                    });
                    alert(data.message)
                }

            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    building: null,
                    loading: false,
                    error: true,
                });
            });
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleAddressChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(`/api/buildings/${this.state.building.id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                id: this.state.building.id,
                name: this.state.name,
                address: this.state.address
            })
        }).then(res => res.json()).then((data) => {
            if (data.status == 200) {
                this.setState({
                    redirect: true
                });
            } else {
                console.log(data);
                alert(data.message);
            }

        }).catch((err) => {
            alert('Ocurrio un error');
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/buildings" />
        }
        return (
            <div>
                <Container style={{ marginTop: '3em' }}>
                    <Header as='h2' content='Crear edificio' textAlign='center' />
                    <Link to={`/buildings/`}>Volver al listado</Link>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field required>
                            <label>Nombre</label>
                            <input type="text" name="name" value={this.state.name} required onChange={this.handleNameChange} width={4} />
                        </Form.Field>
                        <Form.Field required>
                            <label>Dirección</label>
                            <input type="text" name="address" value={this.state.address} required onChange={this.handleAddressChange} width={4} />
                        </Form.Field>
                        <Button type='submit' primary>Modificar</Button>
                    </Form>


                    <div class="ui negative message">
                        <i class="close icon"></i>
                        <div class="header">
                            We're sorry we can't apply that discount
                         </div>
                        <p>That offer has expired
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
};

module.exports = UpdateBuilding;
