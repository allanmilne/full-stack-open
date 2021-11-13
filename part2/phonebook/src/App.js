import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Notification from "./components/Notification";
import contactService from "./services/contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    contactService
      .getAll()
      .then((initialContacts) => {
        setContacts(initialContacts);
      })
      .catch((error) => {
        setNotification({
          type: "error",
          message: error.message,
        });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
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
    contactService
      .create(contact)
      .then((returnedContact) => {
        setContacts(contacts.concat(returnedContact));
      })
      .then(() => {
        setNotification({
          type: "success",
          message: `${contact.name}'s details were added to your phonebook`,
        });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((err) => console.error(err.message));
  };

  const deleteContact = (contactToDelete) => {
    if (window.confirm(`Delete ${contactToDelete.name}`)) {
      contactService
        .deleteContact(contactToDelete.id)
        .then(() => {
          // remove contactToDelete from state
          setContacts(
            contacts.filter((contact) => contact !== contactToDelete)
          );
        })
        .then(() => {
          setNotification({
            type: "warning",
            message: `${contactToDelete.name}'s details were deleted from your phonebook`,
          });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch((err) => console.log(err));
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
      })
      .then(() => {
        setNotification({
          type: "warning",
          message: `${existingContact.name}'s details were updated`,
        });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setNotification({
            type: "error",
            message: `${existingContact.name}'s details have already been removed from the server`,
          });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          // deleted contact gets filtered out from state
          setContacts(
            contacts.filter((contact) => contact.id !== existingContact.id)
          );
        }
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
      <Notification notification={notification} />
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
