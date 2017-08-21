import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template._loginButtons,
      ReactDOM.findDOMNode(this.refs.container))
  }
  componentWillUnmount() {
    Blaze.remove(this.view)
  }
  render() {
    return <span ref="container" />
  }
}
