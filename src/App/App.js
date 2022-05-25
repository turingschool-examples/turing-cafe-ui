import React, { Component } from 'react';
import './App.css';
import Reservation from "./Reservation"
import Form from "./Form"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => this.setState({reservations: data}))
  }

  createReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form createReservation={this.createReservation}/>
        </div>
        <div className='res-container'>
          <Reservation reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
