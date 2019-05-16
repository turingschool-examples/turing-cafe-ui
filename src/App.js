import React, { Component } from 'react';
import './App.css';
// import ResyForm from './ResyForm';
import ResyContainer from './ResyContainer';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

// fetchData(){
//   return fetch('http://localhost:3001/api/v1/reservations')
//   .then(response => response.json())
//   .then(results => console.log(results))
//   .catch(error => 
//    console.log(error));
// }

handleSubmit = (res) => {
  const reservation = {
    name: res.name,
    date: res.date,
    time: res.time,
    numberOfGuests: res.numberOfGuests
  }
 return this.state.reservations = {...this.state.reservations, reservation}
  }

  //use post instead of this


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          {/*<ResyForm submit={this.handleSubmit}/>*/}
        </div>
        <div className='resy-container'>
          <ResyContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;




//fetch existing reservations