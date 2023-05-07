import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointment } from '../action'
import '../styles/App.css'

const App = () => {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const appointments = useSelector((state) => state.appointments)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addAppointment(name, time, description))
    setName('')
    setTime('')
    setDescription('')
  }

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Time:</label>
        <input
          type="text"
          className="time-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <textarea
          className="description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add Appointment</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appoinment, index) => (
            <tr key={index}>
              <td>{appoinment.name}</td>
              <td>{appoinment.time}</td>
              <td>{appoinment.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
