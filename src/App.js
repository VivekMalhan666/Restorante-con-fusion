import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  render() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
}

export default App;
