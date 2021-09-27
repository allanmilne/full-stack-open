import React, {useState} from "react";
import Contact from "./components/Contact";

const App = (props) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [persons, setPersons] = useState(props.persons);
    const [searchTerm, setSearchTerm] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.map((person) => person.name).includes(newName)) {
            return window.alert(`${newName} is already added to the phonebook`);
        }

        const nameObject = {
            name: newName,
            number: newNumber,
        };

        setPersons(persons.concat(nameObject));
        setNewName('');
        setNewNumber('');
    };

    const handleFilteredSearch = (event) => {
        const query = event.target.value;

        if (query !== "") {
            const results = persons.filter((person) => {
                return person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            });
            setPersons(results);
        } else {
            setPersons(persons);
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
            <form onSubmit={addPerson}>
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
            <div>
                <ul>
                    {persons.map((person) => {
                        return <Contact key={person.name} person={person}/>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default App;
