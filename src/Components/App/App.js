import React, { Component } from "react";
import Form from "../Form/F";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };

    updateReservations = (newRes) => {
      this.setState({});
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form />
        <div className="resy-container"></div>
      </div>
    );
  }
}

export default App;
