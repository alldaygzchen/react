const Person = ({ name }) => {
  console.log("Person render");
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
