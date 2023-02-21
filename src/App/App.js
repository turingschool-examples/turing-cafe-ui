import React, { Component } from 'react';
import fetchData from '../ApiCalls';
import Container from '../Container/Container';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations:[]
    }
  }

  componentDidMount (){
    fetchData()
    .then(data => {
      this.setState({
        reservations: data,
      });
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
          <Container  reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
