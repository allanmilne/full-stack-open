import React from "react";

const ContactForm = ({
  addContact,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addContact}>
      <div>
        Name:{" "}
        <input
          placeholder={"Enter a name"}
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        Number:{" "}
        <input
          placeholder={"Enter a number"}
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ContactForm;
