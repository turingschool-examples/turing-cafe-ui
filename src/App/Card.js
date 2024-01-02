import './Card.css';
import './Card';

export default function Card({ name, date, time, guests }) {
  return (
    <div className='card'>
      <h3 className="first-Name">{name}</h3>
      <p className='date'>{date}</p>
      <p className='time'>{time}</p>
      <p className='number-of-guests'>Number of Guests: {guests}</p>
      <button>Cancel</button>
    </div>
  )
}
