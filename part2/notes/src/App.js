import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      console.log(response);

      setNotes(notes.concat(noteObject));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((notes) => notes.important);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;

    // loop through notes and find the first element that matches our passed in id and assign it to a variable
    const note = notes.find((note) => note.id === id);

    // spreading our note object, update the value of important to the opposite of it's previous value
    const changedNote = { ...note, important: !note.important };

    // Make a PUT request to the server with our change
    axios.put(url, changedNote).then((response) => {
      console.log(response);

      // now we want to update the state of notes with the server response

      /*
       * REMEMBER map is returning a NEW array and not a mutation
       *
       * The map method creates a new array by mapping every item from the old array into an item in the new array.
       * In our example, the new array is created conditionally so that if note.id !== id is true,
       * we simply copy the item from the old array into the new array.
       * If the condition is false, then the note object returned by the server is added to the array instead.
       */
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, index) => (
          <Note
            key={index}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          placeholder={"Add a new note..."}
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
