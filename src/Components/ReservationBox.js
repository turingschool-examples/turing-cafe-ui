import React from "react";
import Card from "./Card";

const ReservationBox = ({reservations}) => {
    const reservationList = reservations.map(res => {
        return (
            <Card 
            name={res.name}
            date={res.date}
            time={res.time}
            number={res.number}
            id={res.id}
            key={res.id}/>
        )
    })
    console.log(reservationList)
    return (
        <div className="res-box">
            {reservationList}
        </div>
    )
}

export default ReservationBox