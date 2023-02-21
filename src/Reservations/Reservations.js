import React from "react";
import Card from "../Cards/Cards";
import "./Reservations.css";

const Reservations = ({reservations}) => {
     const reservationCards = reservations.map(reservation => {
         return (
            <Card 
                title={reservation.title}
                description={reservation.description}
                id={reservation.id}
                key={reservation.id}
        />
           )
  })
       return (
    <div className='reservation-container'>
      {reservationCards}
    </div>
    )
  }


export default Reservations;
