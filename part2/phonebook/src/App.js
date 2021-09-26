import React, {useState} from "react";
import Contact from "./components/Contact";

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newName, setNewName] = useState('Enter a name');
    const [newNumber, setNewNumber] = useState('Enter a number');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.map(person => person.name).includes(newName)) {
            return window.alert(`${newName} is already added to the phonebook`)
        }

        const nameObject = {
            name: newName,
            number: newNumber
        }

        setPersons(persons.concat(nameObject));
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
                </div>
                <div>
                    Number: <input
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
                    {persons.map(person => {
                        return <Contact key={person.name} person={person}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default App;

