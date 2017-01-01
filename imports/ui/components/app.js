import React from 'react';

const App = (props) => {
  return (
    <div>
      <h1>header</h1>
        <main>
          {console.log(props)}
          {props.children}
        </main>
      <h1>Footer</h1>
    </div>
  );
};

export default App;
