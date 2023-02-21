const fetchReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("no Such Path");
    }
  });
};
export { fetchReservations };
