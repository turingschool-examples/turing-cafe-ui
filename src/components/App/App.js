import React, { Component } from 'react';
import './App.css';
import reserved from '../../mockData/reserved'
import Display from '../Display/Display';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations:reserved
    }
  }
  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Display reservations={this.state.reservations}/>
        </div>
      </main>
    )
  }
}

export default App;
