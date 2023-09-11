import "./Form.css";
import { useState, useEffect } from "react";

function Form({addReservation}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
useEffect(()=>{
    console.log('name', name)
}, [name])
  function submitReservation(event) {
    event.preventDefault()
    const newReservation = {
        id: Date.now(),
        name:name,
        date: date,
        time:time,
        number:number
    }
    addReservation(newReservation)
    clearInputs()
  }

  function clearInputs(){
    setName("")
    setDate("")
    setTime("")
    setNumber("")
  }
  return (
    <div className='resy-form'>
      <input
        name='name'
        value={name}
        placeholder='Name'
        type='text'
        onChange={(event) => setName(event.target.value)}
        required
      ></input>
      <input
        name='date'
        value={date}
        placeholder='Date(mm/dd)'
        type='text'
        onChange={(event) => setDate(event.target.value)}
        required
      ></input>
      <input
        name='time'
        value={time}
        placeholder='Time'
        type='text'
        onChange={(event) => setTime(event.target.value)}
        required
      ></input>
      <input
        name='number'
        value={number}
        placeholder='Number of guests'
        type='text'
        onChange={(event) => setNumber(event.target.value)}
        required
      ></input>
      <button onClick={ event => submitReservation(event)}>Make Reservation</button>
    </div>
  );
}
export default Form;
