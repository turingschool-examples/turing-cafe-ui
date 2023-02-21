import React from "react";
import "./ResCard.css"

const ResCard = ({id,name,date,time,number}) => {
    return (
        <div className="res-card" id={id}>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of Guests: {number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default ResCard