import Contact from "./Contact";

const Filter = ({ onChange, searchPerson }) => {
  return (
    <>
      Search: <input type="text" onChange={onChange} />
      {searchPerson
        ? searchPerson.map((person) => (
            <Contact key={person.name} person={person} />
          ))
        : ""}
    </>
  );
};

export default Filter;
