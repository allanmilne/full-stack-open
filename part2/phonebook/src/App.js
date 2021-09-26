import React, {useState} from "react";
import Contact from "./components/Contact";

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newName, setNewName] = useState('Enter a name');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const addName = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName
        }
        setPersons(persons.concat(nameObject));
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    Name: <input
                    value={newName}
                    onChange={handleNameChange}
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

