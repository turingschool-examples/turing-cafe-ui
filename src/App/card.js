import React from 'react'
import './card.css'

const Card = ({id, name, date, time, number, deleteReservation}) => {
	return(
		<div className="card">
			<h1>{name}</h1>
			<h2>{date} @ {time}</h2>
			<h3>Reservation {number? number : id}</h3>
			<button onClick={() => deleteReservation(id)}>Delete Reservation</button>
		</div>
	)
}

export default Card