import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import './ResContainer.css'


const ResContainer = ({reservations, removeReservation}) => {
  // pass in reservations from fetch as props, once app retrieves them from call, map over them, create reservation cards
  console.log(reservations)
  const mappedRes = reservations.map((object, index)=> <ReservationCard info={object} key={index} removeReservation={removeReservation}/>)
  return (
    <div className='res-container'>
      {mappedRes}
    </div>
  )
}

export default ResContainer;