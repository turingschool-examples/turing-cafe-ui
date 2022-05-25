import React, { Component } from 'react';
import '../styling/App.css';
import getFetch from '../apiCalls.js'
import ResyContainer from './ResyContainer.js'
import Form from './Form.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  };

  componentDidMount = () => {
    getFetch()
    .then(data => this.setState( {reservations: data} ))
  }

  addReservation = (newReservation) => {
    console.log("add reservation")
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <ResyContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
