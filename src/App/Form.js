import React from 'react'
import './Form.css'

class Form extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			date: '',
			time: 0,
			guests: 0
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	submitReservation = (event) => {
		event.preventDefault()
		const newReservation = {
			id:Date.now(),
			...this.state
		}
		this.props.addReservation(newReservation)
		this.clearInputs()
	}

	clearInputs = () => {
		this.setState({
			name:'', 
			date: '',
			time: 0,
			guests: 0
		})
	}

	render() {
		return(
			<form>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={this.state.name}
						onChange={event => this.handleChange(event)}
					/>
					<input
						type='text'
						placeholder='Date'
						name='date'
						value={this.state.date}
						onChange={event => this.handleChange(event)}
					/>
					<input
						type='number'
						placeholder='Time'
						name='time'
						value={this.state.time}
						onChange={event => this.handleChange(event)}
					/>
					<input
						type='number'
						placeholder='Number of Guests'
						name='guests'
						value={this.state.guests}
						onChange={event => this.handleChange(event)}
					/>

			<button onClick={event => this.submitReservation(event)}>Make Reservation</button>
			</form>
		)}
}

export default Form