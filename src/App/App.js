import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>


        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
