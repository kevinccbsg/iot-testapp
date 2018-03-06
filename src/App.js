import React, { Component } from 'react';
import axios from 'axios';
import ImagesContainer from './ImagesContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      green: false,
      amber: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(id) {
    const { green, amber } = this.state;
    if (id === 'all') {
      axios.post('/led/green/', {
        mode: !green,
      }).then(() => {
        this.setState({ green: !green });
      }).catch((err) => {
        console.log(err);
        console.log('Error');
      });
      axios.post('/led/amber/', {
        mode: !amber,
      }).then(() => {
        this.setState({ amber: !amber });
      }).catch((err) => {
        console.log(err);
        console.log('Error');
      });
    } else if (id === 'green') {
      axios.post('/led/green/', {
        mode: !green,
      }).then(() => {
        this.setState({ green: !green });
      }).catch((err) => {
        console.log(err);
        console.log('Error');
      });
    } else {
      axios.post('/led/amber/', {
        mode: !amber,
      }).then(() => {
        this.setState({ amber: !amber });
      }).catch((err) => {
        console.log(err);
        console.log('Error');
      });
    }
  }

  render() {
    const { green, amber } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RasphMine</h1>
        </header>
        <p className="App-intro">
          A application to manage your own Rasphberry Pi
        </p>
        <h1>Led Section</h1>
        <p>Click on the options to manage your leds</p> 
        <div className="button-container">
          <div className="button-item">
            <button
              onClick={() => this.handleButtonClick('green')}
              className="buttons green"
            >
              Green
            </button>
          </div>
          <div className="button-item">
            <button
              onClick={() => this.handleButtonClick('amber')}
              className="buttons amber"
            >
              Amber
            </button>
          </div>
          <div className="button-item">
            <button
              onClick={() => this.handleButtonClick('all')}
              className="buttons all"
            >
              All
            </button>
          </div>
        </div>
        <div>
          <ImagesContainer
            green={green}
            amber={amber}
          />
        </div>
      </div>
    );
  }
}

export default App;
