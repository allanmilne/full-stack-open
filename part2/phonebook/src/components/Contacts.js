import React from "react";

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.name}>
              {contact.name} {contact.number} <button onClick={() => deleteContact(contact)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
