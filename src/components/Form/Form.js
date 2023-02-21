import React, {Component} from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date:'',
      time: '',
      numberGuest:0
    }
  }
  handleChange = (e) => {
   const  {name , value} = e.target
   this.setState({[name]: value})
  }

  render() {
    return(
        <form className="form-area">
          <input 
            type='text'
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            placeholder="Date (mm/dd)"
            name="date"
            value={this.state.date}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            placeholder="Time"
            name="time"
            value={this.state.time}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='number'
            name="numberGuest"
            step="1"
            min="0"
            value={this.state.numberGuest}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="form-btn"> Make Reservation </button>
        </form>
    )
  }
}
export default Form; 