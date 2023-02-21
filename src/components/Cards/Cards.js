import React from "react";
import './Cards.css'

const Cards = ({date,name,number,time, cancelReservation,id}) => {
  return(
    <section className="card-body">
      <h2> {name} </h2>
      <h3> {date} </h3>
      <h3>{time} pm </h3>
      <h3> Number of guest: {number} </h3>
      <button className="card-button" onClick={() => {cancelReservation(id)}}> Cancel </button>
    </section>
  )

}
export default Cards

