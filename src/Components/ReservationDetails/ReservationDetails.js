import React from "react";
import "./ReservationDetails.css";

const ReservationDetails = ({ name, date, time, number }) => {
  return (
    <div className="card-container">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${number}`}</p>
      <button>Delete</button>
    </div>
  );
};

export default ReservationDetails;
