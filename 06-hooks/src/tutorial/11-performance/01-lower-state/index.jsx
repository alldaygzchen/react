import { useState } from "react";
import { data } from "../../../data";
import Counter from "./Counter";
import List from "./List";
const LowerState = () => {
  console.log("render LowerState component");
  const [people] = useState(data);
  const [press, setPress] = useState(false);

  return (
    <section>
      <Counter />
      <List people={people} />
      <button
        onClick={() => {
          setPress(!press);
        }}
      >
        button
      </button>
    </section>
  );
};
export default LowerState;
