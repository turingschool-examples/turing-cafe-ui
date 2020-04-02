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

  handleClick(event) {
    const { name, date, time, number } = this.state;
    if(name && date && time && number) {
      event.preventDefault();
      const reservation = {
        id: Date.now(),
        ...this.state
      }
      this.props.addReservation(reservation)
    }
  }

  render () {
    return (
      <form>
        <input
          placeholder="Name"
          name="name"
          onChange={(event) => this.updateState(event)}
          required
          ></input>
        <input
          placeholder="Date (m/dd)"
          name="date"
          onChange={(event) => this.updateState(event)}
          required
          ></input>
        <input
          placeholder="Time"
          name="time"
          onChange={(event) => this.updateState(event)}
          required
          ></input>
        <input
          placeholder="Number of guests"
          type="number"
          name="number"
          onChange={(event) => this.updateState(event)}
          required
          ></input>
        <button
          type="button"
          id="submit"
          onClick={(event) => this.handleClick(event)}
          >Make Reservation</button>
      </form>
    )
  }
}

export default Form;
