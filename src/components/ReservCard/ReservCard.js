import './ReservCard.css'

function ReservCard({name, id, date, time, partySize}){
    console.log('name', name)
    console.log('id',id )
    console.log('date', date )
    console.log('time', time)
    console.log('partySize', partySize )
    
    return (
        <div className='resy-card'>
            <p>{name}</p>
            <p>{partySize} people</p>
            <p>{time}PM</p>
            <p>{date}</p>
            <button> I don't work yet</button>
        </div>
    )
}


export default ReservCard
