// http://localhost:3001/api/v1/reservations

const fetchInformation = () => {
    return fetch(`http://localhost:3001/api/v1/reservations`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(`Error fetch error`, error))
}

export {fetchInformation}