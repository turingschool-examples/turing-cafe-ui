export function getReservations() {
    fetch("http://localhost:3001/api/v1/reservations")
  .then((response) => {
    if (!response.ok) {
      throw new Error("The server is not working currently");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("There was a problem.", error.message);
  });
}

