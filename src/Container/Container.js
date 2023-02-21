import React from "react";
import ResCard from "../ResCard/ResCard";
import "./Container.css"

const Container = ({reservations}) => {
    const resys = reservations.map(reservation => {
        return (
            <ResCard 
            id={reservation.id}
            key={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}/>
        )
    })
    
    return (
        <div className="resy-container">
            {resys}
        </div>
    )
}

export default Container