import React from 'react';
import Resy from './Resy.js'

const ResyContainer = ({reservations}) => {
  console.log(reservations)

  const reservationList = reservations.map(reservation => {
    return <Resy
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      key={`${reservation.date}${reservation.time}${reservation.number}`}
    />
  })


  return (
    <div>{reservationList}</div>
  )
}

export default ResyContainer