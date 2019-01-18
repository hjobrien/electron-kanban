import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/lane.css';
import Lane from './components/lane';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Grid/>*/}
          <Lane text="col1" id="left-most-lane">

          </Lane>
          <Lane text="col2">

          </Lane>
      </div>
    );
  }
}

export default App;
