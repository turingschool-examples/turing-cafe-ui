import React from "react";
import "./Cards.css";

const Card = ({ title, description, id }) => {
    return (
      <div className='card'>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>🗑</button>
      </div>
    )
  }
export default Card;
