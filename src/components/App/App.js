import './App.css';
import React from 'react';
import { fetchReservationData } from '../../apiCalls';
import { useEffect, useState } from 'react';

function App() {
  const [reservations, setReservations] = useState([]);
  const [newError, setError] = useState("")
  function getReservationData(){
    fetchReservationData()
    .then((data) => {
      console.log('data', data)
      setReservations(data)
    })
    .catch((response) => {
      setError(`${response.status} Error: ${response.statusText}`)
    })
  }

  useEffect(() =>{
 getReservationData()
  }, [])

  useEffect(()=>{
    console.log('updated reservations', reservations)
  }, [reservations])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 