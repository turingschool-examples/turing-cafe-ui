import React from 'react'
import PropTypes from 'prop-types'
import './Reservation.css'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <article className="reservation-card">
        <h2>{this.props.name}</h2>
        <p>{this.props.date}</p>
        <p>{this.props.time} pm</p>
        <p>Number of guests: {this.props.number}</p>
        <button className="cancel">Cancel</button>
      </article>
    )
  }
}

export default Reservation;
