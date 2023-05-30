import React, { Component } from 'react';
import './App.css';
import Reservations from './reservations'
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reservations: [],
      error: ""
    }
  }

  componentDidMount =() => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      } else {
        return response.json()
      }
    })
    .then(data =>this.setState({reservations: data}))
    .catch(err => this.setState({error: err.message}))
    } 

  addReservation = (newReservation) => {
    this.setState({reservations:[...this.state.reservations, newReservation]})
  }

  deleteReservation = (id) => {
    const updatedReservations = this.state.reservations.filter(res => {
      return res.id != id
    })
    this.setState({reservations: updatedReservations})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
