import React, { Component } from 'react';
import './App.css';
import Routes from './config/router';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="app">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
