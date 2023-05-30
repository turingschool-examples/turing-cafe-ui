import React from 'react'
import './reservations.css'
import Card from './card'

const Reservations = ({reservations}) => {

	const reservationCards = reservations.map(res => {
		return(
				<Card
					name={res.name}
					date={res.date}
					time={res.time}
					number={res.number}
					key={res.id}
					id={res.id}
				/>
		)
	})
	return(
		<div className='res-container'>
			{reservationCards}
		</div>
	)
}

export default Reservations