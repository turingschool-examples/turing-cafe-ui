import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ResyForm';


export default class ResyForm extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      date: '',
      time: '',
      numberOfGuests:''
    }
  }


handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = e => {
  e.preventDefault()
  this.props.submit(this.state)
}



  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input value='name' type='text' onChange={this.handleChange}>
      <input value='date' type='text'onChange={this.handleChange}>
      <input value='time' type='text'onChange={this.handleChange}>
      <input value='number of guests' type='text' onChange={this.handleChange}>
      <input type='submit' value="Make Reservation">
      </form>
      </div>
      )
  }
}

