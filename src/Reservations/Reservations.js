import React from 'react';
import Card from '../Card/Card';

const Reservations = ({reservations}) => {

    let allReservations = reservations.map(resy => {
        return (
            <Card
            id={resy.id}
            name = {resy.name}
            date = {resy.date}
            time = {resy.time}
            number = {resy.number}
            />
        )
    })

    return (
        <section>
            
        </section>
    )
}



export default Reservations;