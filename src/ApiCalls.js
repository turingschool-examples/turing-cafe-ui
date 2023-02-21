const fetchData = () => {
    return fetch(`http://localhost:3001/api/v1/reservations`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          throw new Error('404')
        }
      })
}