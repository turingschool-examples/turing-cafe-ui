import React, { Component } from 'react';
import './App.css';
import Reservations from "../Reservations/Reservations";
import { fetchReservations } from "../apiCalls.js";
// import { Route } from 'react-router-dom';


let reservationList; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [ 
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
      { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
      { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ],
      error: "",
    }
  }
  // // componentDidMount() {
  // //   fetchReservations()
  // //     .catch((error) => {
  // //       console.error(error.message);
  // //       this.setState({ error: error.message });
  // //     })
  // //     .then((data) => {
  // //       console.log('The data', data)
  // //       // reservationList = data.reservations;
  // //     })
  // //     .then(() => {
  // //       this.setState({ reservations: reservationList });
  // //     });
  // }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <Reservations reservations={this.state.reservations} />
        <div className='resy-container'>
          {/* <Route exact path="/Reservations/" render={() => <Reservations reservationData={this.state.reservations} error={this.state.error}/>}/> */}
        </div>
      </div>
    )
  }
}

export default App;
// import React, { useEffect, useState } from "react"

// const UsingFetch = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("http://localhost:3001/api/v1/reservations")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default UsingFetch