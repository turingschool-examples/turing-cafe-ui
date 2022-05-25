import React from 'react';
import './Reservation.css';

const Reservation = (props) => {
  const allRes = props.reservations.map((reservation) => {
    return (
      <div className="card" key={reservation.id}>
        <h3 className="card-name">{reservation.name}</h3>
        <p className="card-date">{reservation.date}</p>
        <p className="card-time">{reservation.time}</p>
        <p className="card-guests">{reservation.number}</p>
        <button className="cancel-btn">Cancel</button>
      </div>
    )})
  return (
    <div className="card-box">
      {allRes}
    </div>
  )
}

export default Reservation
