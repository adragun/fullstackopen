import Contact from "./Contact";

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </ul>
  );
};

export default Persons;
