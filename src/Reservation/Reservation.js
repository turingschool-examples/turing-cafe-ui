import React from 'react'
import PropTypes from 'prop-types'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <article>
        <h2>{this.props.name}</h2>
      </article>
    )
  }
}

export default Reservation;
