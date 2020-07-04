const React = require('react');
const Header = require('./header');
const Footer = require('./footer');

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header currentUser={this.props.currentUser}/>
                <div className="page-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
};

module.exports = Layout;
