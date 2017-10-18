import React, { Component } from 'react';

class Login extends Component {
  state = {
    error: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.email.value;
    const password = this.password.value;

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        this.setState({ error: error.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  render() {
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Meld aan<span className="caret" /></a>
        <div className="dropdown-menu">
          <form onSubmit={this.handleSubmit} autoComplete="on">
            <div className="form-group">
              <label htmlFor="Input Email">Email</label>
              <input ref={(email) => { this.email = email; }} type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="Input Password">Wachtwoord</label>
              <input ref={(password) => { this.password = password; }} type="password" className="form-control" placeholder="Wachtwoord" />
            </div>
            <div className="text-danger">{this.state.error}</div>
            <button type="submit" className="btn btn-primary">Meld aan</button>
          </form>
        </div>
      </li>
    );
  }
}

export default Login;
