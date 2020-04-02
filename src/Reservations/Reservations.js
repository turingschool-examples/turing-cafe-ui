import React from 'react';
import Reservation from '../Reservation/Reservation';
import PropTypes from 'prop-types';
import './Reservations.css'

class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({reservations: data}))
      .catch(err => console.error(err))
  }

  buildReservationComponents() {
    const { reservations } = this.state;
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
