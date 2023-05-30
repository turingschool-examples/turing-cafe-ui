import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({info}) => {
  // this will be an instance of each reservation, using props passed from the container as it maps through its own props
  return (
    <div className="single-res">
      <h1 className="single-header">Name: {info.name}</h1>
      <span className="single-detail">ID: {info.number}</span>
      <span className="single-detail">Time: {info.time}</span>
    </div>
  )
}

export default ReservationCard;