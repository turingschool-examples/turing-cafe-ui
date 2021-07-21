import React from 'react';
import Card from '../Card/Card';
import './Reservations.css'

const Reservations = ({reservations}) => {

    let allReservations = reservations.map(resy => {
        return (
            <Card
            id={resy.id}
            key={resy.id}
            name = {resy.name}
            date = {resy.date}
            time = {resy.time}
            number = {resy.number}
            />
        )
    })

    return (
        <section className="reservation-wrapper">
            {allReservations}
        </section>
    )
}



export default Reservations;