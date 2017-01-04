import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Admin extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Dishes.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  render() {
    return (
      <div className="container">
        <h1>Admin</h1>
          <form onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Add new dish"
            />
          </form>
      </div>
    );
  }
}

export default Admin;
