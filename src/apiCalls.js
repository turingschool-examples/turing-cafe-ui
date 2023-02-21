const fetchReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong retrieving information")
      } else {
        return res.json()
      }
    })
}

export default fetchReservations;