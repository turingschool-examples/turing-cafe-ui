import './App.css';
import React from 'react';
import Reservations from './Reservations';
import { useState, useEffect } from 'react';
import { getReservations } from '../apiCalls/apiCalls.js'

export default function App() {

  const [reservationData, setReservations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getReservations()
    .then((data) => {
      setReservations(data)
    }).catch((error) => {
      setError(error.message)
    })
    console.log(reservationData)
  }
 
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      < Reservations reservationData={reservationData}/>
    </div>
  );
}

