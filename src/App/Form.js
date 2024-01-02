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
      addReservation()
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
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="date" placeholder="Date" />
      <input type="text" name="time" placeholder="Time" />
      <input type="text" name="guests" placeholder="Guests" />
      <button>Make Reservation </button>
    </form>
  );
}