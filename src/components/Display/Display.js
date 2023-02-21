import React from "react";
import './Display.css'; 
import Cards from "../Cards/Cards";

const Display = ({reservations}) => {
  const reservedReservations = reservations.map((reservedSlot) => {
    console.log(reservedSlot)
   
  })

  return(
    <section>
    </section>
  )
}
export default Display