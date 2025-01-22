import { useState } from "react";
import { data } from "../../../data";
import Counter from "./Counter";
import List from "./List";
const LowerState = () => {
  console.log("render LowerState component");
  const [people] = useState(data);

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;
