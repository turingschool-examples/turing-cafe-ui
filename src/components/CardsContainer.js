import React, { Component } from "react";
import "../styles/CardsContainer.css"
import Card from "./Card";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
      this.setState({data: this.props.data})
  }

  createCards() {
    console.log("createCards", this.state.data);
    const cards = this.state.data.map((reservation) => {
      return <Card data={reservation} />
    });
    return cards;
  }

  render() {
    return <div className="cards-container">{this.createCards()}</div>;
  }
}

export default CardContainer;
