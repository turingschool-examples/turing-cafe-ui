import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      allReservations: [],
    }
  }

  getAllReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => {
        this.setState({ allReservations: data })
      });
  }

  componentDidMount = () => {
    this.getAllReservations();
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservation allReservations={this.state.allReservations} />
        </div>
      </div>
    )
  }
}

export default App;
