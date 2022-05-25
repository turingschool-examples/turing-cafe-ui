import React, { Component } from 'react';
import './App.css';
import CardsContainer from '../components/CardsContainer';
import ResyForm from '../components/ResyForm';

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => this.setState({data: data}))
  }

  handleClick = (newRes) => {

    this.setState(prevState => ({data: [...prevState.data, newRes]}))
  }

  render() {
    if (!this.state.data.length) {
        return (<div className="App"><p>Loading</p></div>)
    }

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResyForm handleClick={this.handleClick}/>
        <CardsContainer data={this.state.data}/>
      </div>
    )
  }
}

export default App;
