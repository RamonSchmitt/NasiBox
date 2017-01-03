import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

const App = (props) => {
  return (
    <div>
      <Navigation />
        <main>
          {props.children}
        </main>
      <Footer />
    </div>
  );
}

export default App;
