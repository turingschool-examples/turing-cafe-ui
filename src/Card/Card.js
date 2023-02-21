import React from "react";
import "./Card.css";

export default function Card({ id, name, date, time, number }) {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
      <p className="number">Number of guests: {number}</p>
      <button className="cancel-button">Cancel</button>
    </div>
  )
}
