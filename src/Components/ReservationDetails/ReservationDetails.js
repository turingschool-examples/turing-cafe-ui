import React from "react";
import "./ReservationDetails.css";

const ReservationDetails = ({ id, name, date, time, number, deleteRes }) => {
  console.log(deleteRes);
  return (
    <div className="card-container">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${number}`}</p>
      <button onClick={() => deleteRes(id)}>Delete</button>
    </div>
  );
};

export default ReservationDetails;
