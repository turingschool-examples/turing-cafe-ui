import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      name: '',
      time: '',
      number: 0
    }
  }

  render() {
    return (

      <form className="input-box">

        <input className="input-field"
        type="text"
        placeholder="Reservation Date"
        name="date"
        value={this.state.date}
        />

        <input className="input-field"
        type="text"
        placeholder="Name for Reservation"
        name="name"
        value={this.state.name}
        />

        <input className="input-field"
        type="text"
        placeholder="Number of Guests"
        name="number"
        value={this.state.number}
        />

        <input className="input-field"
        type="text"
        placeholder="Time (Hour: Minute format)"
        name="time"
        value={this.state.time}
        />
        <button className="submit-button">Submit</button>
      </form>
    )
  }
}
export default Form;