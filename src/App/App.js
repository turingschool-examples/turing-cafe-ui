import React, { Component } from 'react';
import { fetchInformation } from '../apiCalls';
import ReservationBox from '../Components/ReservationBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  //need container - called in App
  //need cards - called in ReservationBox

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationBox />
        </div>
      </div>
    )
  }
}

export default App;
