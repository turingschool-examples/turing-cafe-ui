import React from 'react';

const Resy = ({name, date, time, number}) => {

  return (
    <div>
       <h2>{name}</h2>
       <h2>{date}</h2>
       <h2>{time}</h2>
       <h2>{number}</h2>
    </div>
  )
}

export default Resy