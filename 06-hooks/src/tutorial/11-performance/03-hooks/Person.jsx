const Person = ({ name, id, removePerson }) => {
  console.log("Person component render");
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default Person;
