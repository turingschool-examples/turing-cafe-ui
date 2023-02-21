import React, { Component } from 'react';
import './App.css';
import fetchReservations from '../apiCalls';
import Reservations from "../Reservations/Reservations";
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  addReservation = (newRes) => {
    this.setState({reservations: [...this.state.reservations, newRes]})
  }

  componentDidMount() {
    fetchReservations()
      .then(data => {
        console.log(data);
        this.setState({reservations: data});
      })
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form 
          addReservation={this.addReservation}
          />
        </div>
        <div className='resy-container'>
          <Reservations 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
