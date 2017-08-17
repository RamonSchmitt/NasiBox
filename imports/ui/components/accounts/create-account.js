import React, { Component } from 'react'

class CreateAccount extends Component {
  constructor() {
    super()

    this.state = { warning: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUserData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    if (newUserData.password < 8) {
      this.setState({ warning: 'gebruik een wachtwoord met ten minste 8 tekens' });
    } else {
      Meteor.call('createUserAccount', newUserData);
    }
    Meteor.loginWithPassword(newUserData.email, newUserData.password);
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handleSubmit.bind(this)} autoComplete="on">
          <div className="text-danger">{console.log("state = ", this.state.warning)}</div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input ref="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Wachtwoord</label>
            <input ref="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Wachtwoord" />
          </div>
          <button type="submit" className="btn btn-default">Schrijf in</button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
