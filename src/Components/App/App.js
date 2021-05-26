import React, { Component } from 'react';
import Form from '../Form/Form';
import Reservation from '../Reservation/Reservation';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      allReservations: [],
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => {
        this.setState({ allReservations: data });
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: `Sorry, something went wrong.` })
      })
  }

  addReservation = (newRes) => {
    this.setState({ allReservations: [...this.state.allReservations, newRes] });
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newRes }), 
    })
      .then(response => {
        response.json()
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteReservation = (e) => {
    console.log(e.target);
    const id = parseInt(e.target.id);
    const filteredReservations = this.state.allReservations.filter(resy => {
      return resy.id !== id;
    });
    this.setState({ allReservations: filteredReservations });
    
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      redirect: 'follow'
    })
    .then(response => {
      if (response.ok) {
        console.log(response)
        response.text();
      } else {
        throw new Error(`Sorry, we could not remove the reservation.`);
      }
    })
    .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservation 
            allReservations={this.state.allReservations} 
            deleteReservation={this.deleteReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
