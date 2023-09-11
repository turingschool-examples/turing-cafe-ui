import './Form.css'

function Form (){
    return (
        <div className='resy-form'>
            <input label="Name" placeholder="Name" type="text"></input>
            <input label="Date" placeholder="Date(mm/dd)"  type="text"></input>
            <input label="Time" placeholder="Time"  type="text"></input>
            <input label="NumberGuests" placeholder="Number of guests"  type="text"></input>
            <button>Make Reservation</button>
      </div>
    )
}
export default Form