import './Reservations.css';
import Card from './Card';

export default function Reservations({ reservationData }) {

  const reservationCard = reservationData.map(reservation => {
    return (
      <Card 
        firstName={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />
    )
  })

  return (
    <div className='reservations-container'>
      {reservationCard}
    </div>
  )

}