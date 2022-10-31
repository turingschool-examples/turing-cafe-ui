import React from "react";

const Card = ({id, name, date, time, number}) => { 
    return(
        <div className='res-card'>
            <h2>Name: {name}</h2>
            <h3>Date: {date}</h3>
            <h3>Time: {time}</h3>
            <h3>Number: {number}</h3>
        </div>
    )
}

export default Card