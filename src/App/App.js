import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls'
import Reservations from './Reservations'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getReservations()
    .then(data => {
      this.setState({ reservations: data})
      console.log(this.state)
    })
    .catch(error => this.setState({error: 'Uh oh something has go terribly wrong'}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
