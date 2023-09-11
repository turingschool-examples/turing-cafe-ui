import './App.css';
import React from 'react';
import { fetchReservationData } from '../../apiCalls';
import { useEffect, useState } from 'react';
import ReservCard from '../ReservCard/ReservCard';
import ReservContainer from '../ReservContainer/ReservContainer'
import Form from '../Form/Form'
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

  function addReservation(newResy){
    setReservations([...reservations, newResy])
  }
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={addReservation}/> 
      <div>
        <ReservContainer reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 