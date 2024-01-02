import './Form.css';
import { useState } from 'react';

export default function Form({ addReservation }) {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  function submitForm(event) {
    event.preventDefault()
    const newReservation = {
      id: Date.now,
      name,
      date,
      time,
      guests
    }
    if(name && date && time && guests) {
      addReservation(newReservation)
      clearInput()
    }
    function clearInput() {
      setName("")
      setDate("")
      setTime("")
      setGuests("")
    }
  }

  return (
    <form>
      <input type="text" name="name" placeholder="Name" value={name} onChange={event => setName(event.target.value)}/>
      <input type="date" name="date" placeholder="Date" value={date} onChange={event => setDate(event.target.value)}/>
      <input type="time" name="time" placeholder="Time" value={time} onChange={event => setTime(event.target.value)}/>
      <input type="number" name="guests" placeholder="Guests" value={guests} onChange={ event => setGuests(event.target.value)}/>
      <button onClick={event => submitForm(event)}>Make Reservation </button>
    </form>
  );
}