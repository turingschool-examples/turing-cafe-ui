import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { getReservations } from '../APICalls';

function App() {

useEffect(() => {
  getReservations()
  .then((data) => {
    console.log(data)
  })
},[])

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