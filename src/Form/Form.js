import React from 'react'
import PropTypes from 'prop-types'

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
  render () {
    return (
      <input
        placeholder="Name"></input>
    )
  }
}

export default Form;
