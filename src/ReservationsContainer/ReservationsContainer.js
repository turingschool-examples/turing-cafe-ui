import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard.js'
import './ReservationsContainer.css'

const ReservationsContainer = ({ reservations  }) => {
  let reservationCards = reservations.map(resy => {
    return (
      <ReservationCard
        key={resy.id}
        id={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
      />
    )
  })

  return (
    <div className="resy-cards">
      {reservationCards}
    </div>
  )
}

export default ReservationsContainer;
