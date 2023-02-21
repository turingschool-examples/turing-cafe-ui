import React, { Component } from "react";
import Form from "../Form/Form";
import "./App.css";
import { fetchReservations } from "../Api";
import Reservations from "../Reservations/reservations";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    fetchReservations().then((data) => {
      this.setState({
        reservations: data,
      });
    });
  }

  updateReservations = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] });
  };
  render() {
    console.log(this.state.reservations);
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form updateReservations={this.updateReservations} />
        <Reservations reservations={this.state.reservations} />
        <div className="resy-container"></div>
      </div>
    );
  }
}

export default App;
