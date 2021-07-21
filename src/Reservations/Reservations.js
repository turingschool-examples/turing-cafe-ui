import React from 'react';
import Card from '../Card/Card';

const Reservations = ({reservations}) => {

    let allReservations = reservations.map(resy => {
        return (
            <Card
            id={resy.id}
            />
        )
    })
    return (
        <section>

        </section>
    )
}



export default Reservations;