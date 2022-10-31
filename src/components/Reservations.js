import React from 'react'
import Resy from './Resy'
import './Reservations.css'

const Reservations = ({reservations}) => {
const resys = reservations.map(resy => {
  return (
   <Resy
    id={resy.id}
    name={resy.name}
    date={resy.date}
    time={resy.time}
    number={resy.number}
    key={resy.id}
   />
  )
})

return (
  <div className='resy-container'>
    {resys}
  </div>
)
}



export default Reservations
