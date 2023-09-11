import './ReservContainer.css'
import ReservCard from '../ReservCard/ReservCard'

function ReservContainer({reservations}){
    console.log('reservations props', reservations)

    const resyCards = reservations.map(resy => {
        return (
            <ReservCard
            name={resy.name}
            id={resy.id}
            date={resy.date}
            time={resy.time}
            partySize={resy.number}
            key={resy.id}/>
    
        )
    })
    return (
        <div className='resy-container'>
            {resyCards}
        </div>
    )
}


export default ReservContainer
