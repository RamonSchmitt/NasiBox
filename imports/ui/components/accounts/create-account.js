import React, { Component } from 'react';

class CreateAccount extends Component {
  constructor() {
    super();

    this.state = { warning: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUserData = {
      email: this.email.value,
      password: this.password.value,
    };

    if (newUserData.password < 8) {
      this.setState({ warning: 'gebruik een wachtwoord met ten minste 8 tekens' });
    } else {
      Meteor.call('createUserAccount', newUserData);
    }
    Meteor.loginWithPassword(newUserData.email, newUserData.password);
  }

  render() {
    return (
      <div className="container menu">
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.handleSubmit} autoComplete="on">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input ref={(email) => { this.email = email; }} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Wachtwoord</label>
              <input ref={(password) => { this.password = password; }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Wachtwoord" />
            </div>
            <button type="submit" className="btn btn-default">Schrijf in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
