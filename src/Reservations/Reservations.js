import React from 'react'
import Reservation from 
import PropTypes from 'prop-types'

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

  buildReservationsComponent() {
    this.state.reservations.map(reservation => {
      return
    })
  }

  render () {
    return (<p>yo</p>)
  }
}

export default Reservations;
