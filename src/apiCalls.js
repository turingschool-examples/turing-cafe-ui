const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
}

const postReservations = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify({
            'name': reservation.name,
            'date': reservation.date,
            'time': reservation.time,
            'number': reservation.number
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
}

export {getReservations, postReservations}