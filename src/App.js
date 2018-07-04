import React, { Component } from 'react';

import './App.css';
import Home from './Home/Home';
import { Header } from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home />
      </div>
    );
  }
}

export default App;
