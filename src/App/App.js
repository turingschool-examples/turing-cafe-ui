import React, { Component } from 'react';
import './App.css';
// import { reservations, menu } from './data.js'
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: false
    }
  }

  componentDidMount = () => {
    fetch(`http://localhost:3001/api/v1/reservations`)
      .then(response => {
        if (response.ok) {
          this.setState({ error: false})
          return response.json()
        } else {
          throw Error(response.statusText)
        }
      })
      .then(data => this.setState({ reservations: data }))
      .catch((error) => {
        this.setState({ error: true })
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
