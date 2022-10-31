import React, { Component } from 'react';
import './App.css';
import Form from "../Form/Form";

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  saveReservation = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => this.setState({ reservations: [...this.state.reservations, response] }))
      .catch(response => console.error(response));
  };

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(response => this.setState({ reservations: response }))
      .catch(response => console.error(response));
  };

  deleteReservation = (deletedReservation) => {
    this.setState({ reservations: this.state.reservations.filter(reservation => reservation.id !== deletedReservation.id) });
    fetch(`http://localhost:3001/api/v1/reservations/${deletedReservation.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(response => console.error(response));
  };


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form
          saveReservation={this.saveReservation}
          reservations={this.state.reservations} />
      </div>
    );
  };
};

export default App;