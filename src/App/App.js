import React, { Component } from 'react';
import { fetchInformation } from '../apiCalls';
import ReservationBox from '../Components/ReservationBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  //need container - called in App
  //need cards - called in ReservationBox
  componentDidMount = () => {
    fetch(`http://localhost:3001/api/v1/reservations`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let reservationArray = data.map((data) => {return data})
      this.setState({reservations: reservationArray})
      console.log(this.state.reservations)
    })
    .catch(error => console.log(error))
  }

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
