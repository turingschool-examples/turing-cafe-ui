import React from "react";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import "./reservations.css";

const Reservations = (props) => {
  const { reservations } = props;
  const reservationCard = reservations.map((date) => {
    return (
      <ReservationDetails
        name={date.name}
        date={date.date}
        time={date.time}
        number={date.number}
      />
    );
  });
  return <div className="res-container">{reservationCard}</div>;
};

export default Reservations;
