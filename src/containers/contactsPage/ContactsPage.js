import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ( {contacts, addContact} ) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   };

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.some(contact => contact.name === name)) {
      setIsDuplicate(true);
      console.log('The name is a duplicate');
    } else {setIsDuplicate(false)}
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicate ? <p>This contact name is already used!</p> : <p>New contact</p> }
        <ContactForm 
          handleSubmit={handleSubmit}
          contacts={contacts} 
          name={name} setName={setName} 
          email={email} setEmail={setEmail} 
          phone={phone} setPhone={setPhone}
          isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrayOfData={contacts} />
      </section>
    </div>
  );
};
