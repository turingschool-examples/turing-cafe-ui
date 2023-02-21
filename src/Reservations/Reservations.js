import React from "react";
import Card from "../Card/Card";

const Reservations = ({ reservations }) => {
  
  const reservationCards = reservations.map(res => {
    return (
      <Card
        id={res.id}
        key={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
      />
    )
  })
  
  return (
    <div className="resy-container">
      {reservationCards}
    </div>
  )
}

export default Reservations;