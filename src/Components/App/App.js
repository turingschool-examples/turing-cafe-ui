import React, { Component } from 'react';
import Form from '../Form/Form'
import ResContainer from '../ResContainer/ResContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res=> res.json())
    .then(data=> this.setState({...this.state, reservations: data}))
  }

  addReservation = async (resObject) => {
    let url = 'http://localhost:3001/api/v1/reservations'
    const postResults = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(resObject)
    })
    console.log(postResults)
    this.setState({reservations: [...this.state.reservations, resObject]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResContainer reservations = {this.state.reservations}/>
        <Form addRes={this.addReservation}/>
      </div>
    )
  }
}

export default App;
