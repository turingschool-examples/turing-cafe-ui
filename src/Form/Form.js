import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ name: value });
  };

  handleClick = (res) => {
    const newRes = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addReservation(res);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", date: "", time: 0, number: 0 });
  };

  render() {
    return (
      <form className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date of Reservation"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Time of Reservation"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Number of guests"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Make Reservation</button>
      </form>
    );
  }
}

export default Form;
