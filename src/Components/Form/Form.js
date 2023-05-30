import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      name: '',
      time: '',
      number: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.addRes(this.state)
    console.log('form object:', this.state)
    this.clearInputs()
  }

  clearInputs() {
    this.setState({
      date: '',
      name: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (

      <form className="input-box">

        <input className="input-field" id="input-date"
        type="text"
        placeholder="Reservation Date"
        name="date"
        value={this.state.date}
        onChange={(event)=> {this.handleChange(event)}}
        />

        <input className="input-field" id="input-name"
        type="text"
        placeholder="Name for Reservation"
        name="name"
        value={this.state.name}
        onChange={(event)=> {this.handleChange(event)}}
        />

        <input className="input-field" id="input-number"
        type="text"
        placeholder="Number of Guests"
        name="number"
        value={this.state.number}
        onChange={(event)=> {this.handleChange(event)}}
        />

        <input className="input-field" id="input-time"
        type="text"
        placeholder="Time (Hour: Minute format)"
        name="time"
        value={this.state.time}
        onChange={(event)=> {this.handleChange(event)}}
        />

        <button className="submit-button" onClick={(event)=> {this.handleClick(event)}}>Make Reservation</button>

      </form>
    )
  }
}
export default Form;