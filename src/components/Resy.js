import React from 'react'
import './Resy.css'

const Resy = ({id, name, date, time, number}) => {
  
  return (
    <div className='resy-individual'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Resy
