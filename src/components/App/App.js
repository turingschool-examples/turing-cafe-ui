import './App.css';
import React from 'react';
import { getReservationData } from '../../apiCalls';

function App() {
  const [reservations, setReservations] = useState([]);
  
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