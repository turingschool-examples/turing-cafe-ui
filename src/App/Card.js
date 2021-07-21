import React from 'react'
import './Card.css'

const Card = ({ id, name, date, time, number}) => {
    return (
        <div className='each-card' id={id}>
            <h2>{name}</h2>
            <p>Date: {date}</p>
            <p>Time: {time} pm</p>
            <p>Number of guests: {number}</p>
        </div>
    )
}

export default Card; 