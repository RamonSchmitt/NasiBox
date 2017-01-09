import React, { Component } from 'react';

import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import Home from './home';

class App extends Component {
  content() {
    if(this.props.children) {
      return this.props.children;
    } else {
      return <Home />
    }
  }
  render() {
    return (
      <div>
        <Navigation />
          {this.content()}
        <Footer />
      </div>
    );
  }
}

export default App;
