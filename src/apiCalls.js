export const fetchReservationData = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
    .then((response) => {
        if(!response.ok){
            throw new Error("There was an error retrieving your data.")
        }
        return response.json()
    })
}