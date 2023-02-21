import React from "react";

export default function Card({ id, name, date, time, number }) {
  return (
    <div>
      <h2 className="name">{name}</h2>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
      <p className="number">Number of guests: {number}</p>
      <button classname="cancel-button">Cancel</button>
    </div>
  )
}
