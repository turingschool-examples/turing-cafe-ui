import React, { Component } from "react";
import "../styles/Card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    const { date, id, name, number, time } = this.state.data;

    return (
      <div className="card" key={id}>
        <p className="name">{name}</p>
        <p className="date">{date}</p>
        <p className="time">{time}</p>
        <p className="number">{number}</p>
        <button className="cancelBtn">Cancel</button>
      </div>
    );
  }
}

export default Card;