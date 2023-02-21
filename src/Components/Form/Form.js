import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewRes = (e) => {
    e.preventDefault();
    const newRes = {
      id: Date.now(),
      ...this.state,
    };
    this.props.updateReservations(newRes);
  };

  clearInputs = () => {
    this.setState({
      name: "",
      date: "",
      time: "",
      numGuests: 0,
    });
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
          value={this.state.number}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button type="button" onClick={(e) => this.addNewRes(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
