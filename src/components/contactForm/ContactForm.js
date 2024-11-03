import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  contacts,
  isDuplicate,
  setIsDuplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} pattern='^\+(?:[0-9] ?){6,14}[0-9]$' />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit'>Add Contact</button>
    </form>
  );
};

