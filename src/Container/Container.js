import React from "react";

const Container = ({reservations}) => {
    const resys = reservations.map(reservation => {
        return (
            <ResCard 
            key={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}/>
        )
    })
    
    return (
        <div>
            {resys}
        </div>
    )
}

export default Container