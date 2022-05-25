const getFetch = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then(response => {
    if (!response.ok) {
      throw Error(response.text)
    } else {
      return response.json()
    }
  })
  .catch(err => console.log(err))
}

export default getFetch