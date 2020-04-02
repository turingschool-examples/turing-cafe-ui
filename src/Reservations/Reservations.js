import React from 'react';
import Reservation from '../Reservation/Reservation';
import PropTypes from 'prop-types';
import './Reservations.css'

class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  buildReservationComponents() {
    const reservations = this.props.reservations;
    return reservations.map(reservation => {
      return (<Reservation
      date={reservation.date}
      id={reservation.id}
      name={reservation.name}
      number={reservation.number}
      time={reservation.time}
      />)
    })
  }

  render () {
    return (
      this.buildReservationComponents()
    )
  }
}

export default Reservations;
