import React from "react";

export const ContactPicker = ({contacts, handleChange, value, name}) => {
  return (
    <select onChange={handleChange}>
      <option key='default' value=''>No Contact Selected</option>
      {contacts.map( (contact) => {return <option key={contact.name} value={contact.name}>{contact.name}</option>})}
    </select>
  );
};
