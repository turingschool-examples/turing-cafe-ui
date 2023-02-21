import React, { Component } from 'react';
import './App.css';
// import reserved from '../../mockData/reserved'
import Display from '../Display/Display';
import snagReservation from '../apicalls/snagReservation';
import Form from '../Form/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations:[],
      error: ""
    }
  }
  componentDidMount () {
    snagReservation()
    .then((data) => this.setState({reservations:data}))
    .catch((err) => this.setState({error: err.message}))
  }
  addReservation = (newReservation) => {
    return this.setState({reservations: [ ...this.state.reservations, newReservation]})
  }
   cancelReservation = (id) => {
    const displayAllButMe = this.state.reservations.filter((reservation) => reservation.id !== id)
    this.setState({reservations: displayAllButMe})

   }
  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Display reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </main>
    )
  }
}

export default App;
