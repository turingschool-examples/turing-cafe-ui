import React from "react";
import './Cards.css'

const Cards = ({date,id, key,name,number,time}) => {
  return(
    <section className="card-body">
      <h2> {name} </h2>
      <h3> {date} </h3>
      <h3>{time} pm </h3>
      <h3> Number of guest: {number} </h3>
      <button className="card-button"> Cancel </button>
    </section>
  )

}
export default Cards

