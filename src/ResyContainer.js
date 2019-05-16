import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResyCard from './ResyCard';
import './ResyContainer.css'

export default class ResyContainer extends Component {
render() {
  const ResyCard = this.props.reservations.map(res => {
    return <ResyCard name={this.props.name} date={this.props.date} time={this.props.time} numberOfGuests={this.props.numberOfGuests}/>})
  return (
      <div> 
        {ResyCard}
      </div>
   )
  } 
}

//check if accessing the right props