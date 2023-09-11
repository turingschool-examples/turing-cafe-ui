import { getReservations } from '../apiCalls';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    getReservations()
    .then(data => console.log(data))
    .catch(err => `${err.message} Something went wrong`)
  }, [])
  
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