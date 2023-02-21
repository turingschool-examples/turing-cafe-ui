import React from "react";
import './Display.css'; 
import Cards from "../Cards/Cards";

const Display = ({reservations}) => {
  const reservedReservations = reservations.map((reservedSlot) => 
   
   <Cards
    date={reservedSlot.date}
    id={reservedSlot.id}
    key={reservedSlot.id}
    name={reservedSlot.name}
    number={reservedSlot.number}
    time={reservedSlot.time}
   />
   )

  return(
    <section className="display-area">
      {reservedReservations}
    </section>
  )
}
export default Display

