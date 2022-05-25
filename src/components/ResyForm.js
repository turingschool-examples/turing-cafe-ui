import React, { Component } from "react";
import "../styles/ResyForm.css";

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  handleChange = (event) => {
      console.log(event.target.name, event.target.value)
    this.setState(  { [event.target.name]: event.target.value })
}

  render() {
    return (
      <div className="resy-form">
        <form>
          <input
            type="text"
            name="name"
            className="formName"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="date"
            className="formDate"
            placeholder="Date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type="time"
            className="formTime"
            placeholder="Time"
            name="time"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="number"
            className="formNumber"
            name="number"
            placeholder="Number of guests"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button
            className="submitBtn"
            type="submit"
            onClick={() => {
              this.props.handleClick({
                id: new Date(),
                name: this.state.name,
                date: this.state.date,
                time: this.state.time,
                number: this.state.number,
              });
            }}
          >
            Make a Reservation
          </button>
        </form>
      </div>
    );
  }
}

export default ResyForm;


