import React, { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import contactService from "./services/contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    contactService.getAll().then((initialContacts) => {
      setContacts(initialContacts);
    });
  }, []);

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

    const newContact = {
      name: newName,
      number: newNumber,
    };

    contactService.create(newContact).then((returnedContact) => {
      setContacts(contacts.concat(returnedContact));
    });

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
