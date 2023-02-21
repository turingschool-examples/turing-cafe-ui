const snagReservation = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then((res) => {
    if(!res.ok) {
      throw Error('try again later')
    }else{
      return res.json()
    }
  })
}
export default snagReservation; 