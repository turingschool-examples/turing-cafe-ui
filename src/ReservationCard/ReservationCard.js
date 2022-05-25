import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ id, name, date, time, number }) => {

  return (
    <div className="resy-card">
      <p>{name}</p>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

export default ReservationCard;
