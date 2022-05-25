import React, { Component } from 'react';
import './App.css';
import getFetch from '../apiCalls.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  };

  componentDidMount = () => {
    getFetch()
    .then(data => this.setState( {reservations: data} ))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
