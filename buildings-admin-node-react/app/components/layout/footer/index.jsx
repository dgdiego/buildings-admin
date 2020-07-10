const React = require('react');

class Footer extends React.Component {
    render() {
        return (
            <div>
                <nav class="fixed-bottom navbar-light bg-light">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">Usuario: {this.props.currentUser}</li>
                    </ul>
                </nav>
            </div>
        );
    }
};

module.exports = Footer;