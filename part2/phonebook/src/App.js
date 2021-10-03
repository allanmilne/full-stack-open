import React, { useState } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";

const App = (props) => {
  const [contacts, setContacts] = useState(props.contacts);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();

    if (contacts.map((contact) => contact.name).includes(newName)) {
      return window.alert(`${newName} is already added to the phonebook`);
    }

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    setContacts(contacts.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });

  const contactsToShow = searchTerm !== "" ? filteredContacts : contacts;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />

      <h2>Add a new Contact</h2>
      <ContactForm
        addContact={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Contacts contacts={contactsToShow} />
    </div>
  );
};

export default App;
