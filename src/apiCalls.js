const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(checkForError)
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

const checkForError = (response) => {
    if (response.ok) {
     return response.json()
    } else {
      throw new Error('Sorry, your request did not go through')
    }
  };

export {getReservations, postReservations, checkForError}