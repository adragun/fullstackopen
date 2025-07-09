import { useState } from "react";
import Filter from "./components/Filter";
import FormNewPerson from "./components/FormNewPerson";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPerson, setSearchPerson] = useState("");

  const handleNewName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists!`);
      return;
    }

    const newObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newObject));
    setNewName("");
    setNewNumber("");
  };

  const handleSearchPerson = (e) => {
    console.log(e.target.value);

    setSearchPerson(
      persons.filter((person) =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <h2>Phonebook</h2>

      <Filter onChange={handleSearchPerson} searchPerson={searchPerson} />

      <h2>Add a new Contact</h2>

      <FormNewPerson
        onSubmit={handleSubmit}
        valueName={newName}
        onChangeName={handleNewName}
        valueNumber={newNumber}
        onChangeNumber={handleNewNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} />
    </>
  );
}

export default App;
