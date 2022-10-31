import React from "react";
import "./Reservations.css";
import Card from "../Card/Card";

const Reservations = ({ reservations }) => {
  const resyCards = reservations.map((reservation) => {
    return (
      <Card
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    );
  });
  return <section className="reservations">{resyCards}</section>;
};

export default Reservations;
