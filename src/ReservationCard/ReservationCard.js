import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ id, name, date, time, number }) => {

  return (
    <div>
      <p>{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )
}

export default ReservationCard;
