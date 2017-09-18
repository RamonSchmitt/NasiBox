import React, { Component } from 'react';

import Navigation from '../components/layouts/navigation';
import Home from './home';

class App extends Component {
  content() {
    if (this.props.children) {
      return (
        <div>
          <Navigation />
          {this.props.children}
        </div>
      );
    }
    return <Home />;
  }

  render() {
    return (
      <div>
        {this.content()}
      </div>
    );
  }
}

export default App;
