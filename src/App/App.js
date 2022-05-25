import React, { Component } from 'react';
import './App.css';
import { reservations, menu } from './data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
    // console.log(reservations)
  }

  componentDidMount = () => {
    this.setState({ reservations: reservations })
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
