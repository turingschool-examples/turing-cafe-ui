import React from 'react'
import Card from './Card.js'
import './Reservations.css'

const Reservations = ({ reservations }) => {
    console.log(reservations)
    const allCards = reservations.map(reservation => {
        return ( 
            <Card
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
            />
        )
    })

    return (
        <div className='card-holder'>
            {allCards}
        </div>
    )
}

export default Reservations