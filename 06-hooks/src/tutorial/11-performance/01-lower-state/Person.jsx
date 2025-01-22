import { useEffect } from "react";

const Person = ({ name }) => {
  console.log("render Person component");
  useEffect(() => {
    console.log("unfortunately does not fix the issue");
  }, []);

  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
