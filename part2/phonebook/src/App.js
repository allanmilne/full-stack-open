import React, {useState} from "react";
import Contacts from "./components/Contacts";

const App = (props) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [contacts, setContacts] = useState(props.contacts);
    const [searchTerm, setSearchTerm] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
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
        setNewName('');
        setNewNumber('');
    };

    const handleFilteredSearch = (event) => {
        const query = event.target.value;

        if (query !== "") {
            const results = contacts.filter((contact) => {
                return contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            });
            setContacts(results);
        } else {
            setContacts(contacts);
        }

        setSearchTerm(query);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter contacts: <input
                    placeholder={"Filter contacts..."}
                    value={searchTerm}
                    onChange={handleFilteredSearch}
                />
            </div>
            <h2>Add a new Contact</h2>
            <form onSubmit={addContact}>
                <div>
                    Name: <input
                        placeholder={"Enter a name"}
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    Number: <input
                        placeholder={"Enter a number"}
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Contacts contacts={contacts}/>;
        </div>
    );
};

export default App;
