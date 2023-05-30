import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({info, removeReservation}) => {
  // this will be an instance of each reservation, using props passed from the container as it maps through its own props
  return (
    <div className="single-res" id={info.id}>
      <h1 className="single-header">Name: {info.name}</h1>
      <span className="single-detail">Guests: {info.number}</span>
      <span className="single-detail">Time: {info.time}</span>
      <span className="single-detail">Date: {info.date}</span>
      <button id={info.id} onClick={(event)=> removeReservation(event)}>X</button>
    </div>
  )
}

export default ReservationCard;