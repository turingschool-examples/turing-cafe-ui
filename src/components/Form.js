import React, { Component } from 'react';
import '../styling/Form.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      guests: "",
    }
  };

  makeReservation = (event) => {
    event.preventDefault()
    console.log("make reservation")
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="Form">
        <form>
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <input 
            type="text" 
            placeholder="Date (mm/dd)" 
            name="date" 
            value={this.state.date}
            onChange={event => this.handleChange(event)}
          />
          <input 
            type="text" 
            placeholder="Time" 
            name="time" 
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />
          <input 
            type="text" 
            placeholder="Number of Guests" 
            name="guests" 
            value={this.state.guests}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.makeReservation(event)}>Make Reservation</button>
        </form>
      </div>
    )
  }
}

export default Form;