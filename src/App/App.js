import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      reservations: [
        {"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12},
        {"id":2,"name":"Leta","date":"4/5","time":"7:00","number":2},
        {"id":3,"name":"Pam","date":"1/21","time":"6:00","number":4},
        {"id":4,"name":"Khalid","date":"5/9","time":"7:30","number":7},
        {"id":5,"name":"Will","date":"5/15","time":"6:30","number":2},
        {"id":6,"name":"Eric","date":"5/30","time":"6:00","number":8},
        {"id":7,"name":"Robbie","date":"6/5","time":"5:30","number":2},
        {"id":8,"name":"Travis","date":"6/8","time":"7:00","number":12},
        {"id":9,"name":"Brittany","date":"9/9","time":"7:30","number":3},
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;