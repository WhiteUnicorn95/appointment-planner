import React, {useEffect} from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

const getTodayString = () => {

  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  useEffect(() => {
    // Any additional code that depends on the updated selectedContact value
  }, [contact]); 

  const handleChange = (event) => {
    const selectedName = event.target.value;
    const chosenContact = contacts.find(
      (contact) => contact.name === selectedName
    );
    setContact(chosenContact)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type='text' id='name' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type='date' min={getTodayString()} id='date' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input type='time' id='time' value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <ContactPicker contacts={contacts} handleChange={handleChange} value={contact} name={contact.name} />
      <button type='submit'>Add Appointment</button>
    </form>
  );
};
