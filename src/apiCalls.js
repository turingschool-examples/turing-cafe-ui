// http://localhost:3001/api/v1/reservations

const fetchInformation = (infoType) => {
    return fetch(`localhost:3001/api/v1/${infoType}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.log(`Error ${infoType} fetch error`, error))
}

export {fetchInformation}