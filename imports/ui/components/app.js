import React, { Component } from 'react';

import Navigation from '../components/layouts/navigation';
import Home from './home';

class App extends Component {
  content() {
    if (this.props.children) {
      return this.props.children;
    }
    return <Home />;
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.content()}
      </div>
    );
  }
}

export default App;
