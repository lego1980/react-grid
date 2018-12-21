import React, { Component } from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './App.css';

import { LayoutGrid1 } from './layouts/LayoutGrid';
class App extends Component {
  render() {
    return (
      <div>
        <LayoutGrid1 />
      </div>
    );
  }
}

export default App;
