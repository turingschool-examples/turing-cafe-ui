import React from 'react';
import './Reservation.css';

const Reservation = ({ allReservations, deleteReservation }) => {

const resCards = allReservations.map(res => {
  return (
    <article className='resy-card' id={res.id} key={res.id}>
      <h3 className='name'>{res.name}</h3>
      <p className='date'>{res.date}</p>
      <p className='time'>{res.time} pm</p>
      <p className='number'>Number of guests: {res.number}</p>
      <button
        className='cancel-btn'
        id={res.id} 
        key={res.id}
        onClick={deleteReservation}>
          Cancel
      </button>
    </article>
  )
});

  return (
    <>
      {resCards}
    </>
  )
}

export default Reservation;