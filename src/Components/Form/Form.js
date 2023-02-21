import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      numGuests: 0,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input
          type="time"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input
          type="number"
          placeholder="Number"
          name="number"
          value={this.state.numGuests}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button
          type="button"
          onClick={(e) => this.addReservation(e)}
          disabled={
            !this.state.name ||
            !this.state.date ||
            !this.state.time ||
            !this.state.numGuests
          }
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
