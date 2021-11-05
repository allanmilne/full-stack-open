import React, { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import contactService from "./services/contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    contactService.getAll().then((initialContacts) => {
      setContacts(initialContacts);
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddContact = (event) => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    if (
      existing(contact) &&
      window.confirm(
        `${name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      updateContact(existing(contact), contact);
    }

    if (!existing(contact)) {
      createContact(contact);
    }
  };

  const createContact = (contact) => {
    contactService.create(contact).then((returnedContact) => {
      setContacts(contacts.concat(returnedContact));
    });
  };

  const deleteContact = (contactToDelete) => {
    if (window.confirm(`Delete ${contactToDelete.name}`)) {
      contactService.deleteContact(contactToDelete.id).then(() => {
        // remove contactToDelete from state
        setContacts(contacts.filter((contact) => contact !== contactToDelete));
      });
    }
  };

  const updateContact = (existingContact, updatedContactInfo) => {
    contactService
      .update(existingContact.id, updatedContactInfo)
      .then((returnedContact) => {
        setContacts(
          contacts.map((contact) =>
            contact.id !== existingContact.id ? contact : returnedContact
          )
        );
      });
  };

  const existing = (contact) =>
    contacts.find((existingContact) => existingContact.name === contact.name);

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
        addContact={handleAddContact}
        name={name}
        handleNameChange={handleNameChange}
        number={number}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Contacts contacts={contactsToShow} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
