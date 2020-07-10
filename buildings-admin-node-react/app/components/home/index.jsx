const React = require('react');
const Layout = require('../layout');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            algo: null,
        };
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    Enhorabuena chaval!
                </div>
            </Layout>
        )
    }
};

module.exports = Home;
