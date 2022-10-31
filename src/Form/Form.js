import React, { Component } from 'react';
import '../App/App.css';

class Form extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            numberOfGuests: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    makeReservation = (event) => {
        event.preventDefault();
        const newReservation = {
            date: this.state.date,
            id: this.props.reservations.length + 1,
            name: this.state.name,
            time: this.state.time,
            number: Number(this.state.numberOfGuests)
        };
        this.props.saveReservation(newReservation);
        this.setState({
            name: '',
            date: '',
            time: '',
            numberOfGuests: ''
        });
    };

    render() {
        return (
            <form className="reservationForm">
                <input
                    id="name"
                    className="formInput"
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                    placeholder="Name"
                />
                <input
                    id="date"
                    className="formInput"
                    type="text"
                    value={this.state.date}
                    name="date"
                    onChange={this.handleChange}
                    placeholder="Date (mm/dd)"
                />
                <input
                    id="time"
                    className="formInput"
                    type="text"
                    value={this.state.time}
                    name="time"
                    onChange={this.handleChange}
                    placeholder="Time"
                />
                <input
                    id="numberOfGuests"
                    className="formInput"
                    type="text"
                    value={this.state.numberOfGuests}
                    name="numberOfGuests"
                    onChange={this.handleChange}
                    placeholder="Number of Guests"
                />
                <button
                    id="makeReservationButton"
                    onClick={this.makeReservation}>Make Reservation</button>
            </form>
        );
    };
};

export default Form;