import React, { Component } from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './App.css';

import { LayoutGrid1 } from './layouts/LayoutGrid';
import { LayoutGrid2 } from './layouts/LayoutGrid2';
class App extends Component {
  render() {
    return (
      <div>
        <LayoutGrid2 />
      </div>
    );
  }
}

export default App;
