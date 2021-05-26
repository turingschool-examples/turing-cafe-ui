import React from 'react';
import './Reservation.css';

const Reservation = ({ allReservations, deleteReservation }) => {

const resCards = allReservations.map(res => {
  return (
    <article className='resy-card' id={res.id} key={res.id}>
      <h3 className='name'>{res.name}</h3>
      <p>{res.date}</p>
      <p>{res.time} pm</p>
      <p>Number of guests: {res.number}</p>
      <button 
        id={res.id} 
        key={res.id}
        onClick={deleteReservation} 
        className='cancel-btn'>
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