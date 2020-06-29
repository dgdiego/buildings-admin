const React = require('react');
const { Link } = require('react-router-dom');
const { Redirect } = require('react-router-dom');
const { Container, Button, Form, Header } = require('semantic-ui-react');

class CreateBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            redirect: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        fetch('/api/buildings/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address
            })
        }).then(res => res.json()).then((data) => {
            console.log(data)
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
                        <Button type='submit' primary>Crear</Button>
                    </Form>
                </Container>
            </div>
        );
    }
};

module.exports = CreateBuilding;
