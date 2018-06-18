import React, { Component } from 'react';
import './App.css';
import EventsList from './EventsList/EventsList.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
            <h1 className="header__logo">EVENTA</h1>
        </header>
          <EventsList/>
      </div>
    );
  }
}

export default App;
