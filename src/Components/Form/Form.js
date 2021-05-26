import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault();
    
    const newRes = { 
      ...this.state, 
      number: parseInt(this.state.number), 
      id: Date.now(), 
    };

    this.props.addReservation(newRes);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  }

  render() {
    return (
      <form className='form'>
        <input
          name='name'
          value={this.state.name}
          placeholder='Name'
          type='text'
          onChange={this.handleChange}
        />
        <input
          name='date'
          value={this.state.date}
          placeholder='Date (mm/dd)'
          type='text'
          onChange={this.handleChange}
        />
        <input
          name='time'
          value={this.state.time}
          placeholder='Time'
          type='text'
          onChange={this.handleChange}
        />
        <input
          name='number'
          value={this.state.number}
          placeholder='Number of guests'
          type='number'
          onChange={this.handleChange}
        />
        <button onClick={this.submitReservation} className='res-btn'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;