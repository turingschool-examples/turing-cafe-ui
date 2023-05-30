import React from 'react'
import './card.css'

const Card = ({id, name, date, time, number}) => {
	return(
		<div className="card">
			<h1>{name}</h1>
			<h2>{date} @ {time}</h2>
			<h3>Reservation {number}</h3>
		</div>
	)
}

export default Card