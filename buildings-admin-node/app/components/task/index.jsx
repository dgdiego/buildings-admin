const React = require('react');

class Task extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.id}: {this.props.name}</h2>
        <p>{this.props.description}</p>
      </li>
    );
  }
};

module.exports = Task;