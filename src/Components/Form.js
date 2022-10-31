import React from "react";

//This will be a class, because the form needs to reset to empty strings after each new res is added
//Need to add onclick to button and method to create card


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    render() {
        return(
            <form>
                <input
                type='text'
                placeholder="Name"
                value={this.state.name}
                />

                <input
                type='text'
                placeholder="Date"
                value={this.state.date}
                />

                <input
                type='text'
                placeholder="Time"
                value={this.state.time}
                />

                <input
                type='text'
                placeholder="Guests"
                value={this.state.number}
                />

                <button>Submit</button>
            </form>
        )
    }
}

export default Form