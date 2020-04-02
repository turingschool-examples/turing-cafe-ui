import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 1
    }
  }

  updateState(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render () {
    return (
      <form>
        <input
          placeholder="Name"
          name="name"
          onChange={(event) => this.updateState(event)}
          ></input>
        <input
          placeholder="Date (m/dd)"
          name="date"
          onChange={(event) => this.updateState(event)}
          ></input>
        <input
          placeholder="Time"
          name="time"
          onChange={(event) => this.updateState(event)}
          ></input>
        <input
          placeholder="Number of guests"
          name="number"
          onChange={(event) => this.updateState(event)}
          ></input>
        <button id="submit">Make Reservation</button>
      </form>
    )
  }
}

export default Form;
