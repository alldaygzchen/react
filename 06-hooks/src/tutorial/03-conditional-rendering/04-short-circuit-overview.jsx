import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text] = useState("");
  // truthy
  const [name] = useState("susan");

  const codeExample = text || "hello world";

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy AND {text && "hello world"}</h4>
      <h4>Truthy OR {name || "hello world"}</h4>
      <h4>Truthy AND {name && "hello world"}</h4>
      {/* another solution: use it as a variable */}
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
