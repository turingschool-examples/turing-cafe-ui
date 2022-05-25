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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form/>
        <ResyContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
