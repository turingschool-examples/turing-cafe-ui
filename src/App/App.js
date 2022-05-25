import React, { Component } from 'react';
import './App.css';
import getFetch from '../apiCalls.js'
import ResyContainer from './ResyContainer.js'

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
        <ResyContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
