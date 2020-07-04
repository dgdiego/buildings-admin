const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <div className="page-header">
               Header User: {this.props.currentUser}
            </div>
        );
    }
};

module.exports = Header;