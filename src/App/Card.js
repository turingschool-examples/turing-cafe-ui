import React from 'react'
import './Card.css'

const Card = ({ id, name, date, time, number}) => {
    return (
        <div className='each-card' id={id}>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
        </div>
    )
}

export default Card; 