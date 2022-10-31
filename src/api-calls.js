const fetchCall = (type, verb) => {
  if (verb === "GET") {
    return fetch(`http://localhost:3001/api/v1/${type}`).then((response) => {
      if (!response.ok) {
        console.log(response.status);
        throw new Error(response.status);
      } else {
        return response.json();
      }
    });
  }
};

export { fetchCall };
