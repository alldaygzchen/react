import { useState } from 'react';

const UseStateGotcha = () => {
  console.log('render ');
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // wrong (due to closure)
    // setTimeout(() => {
    //   console.log("clicked the button");
    //   setValue(value + 1);
    // }, 3000);
    // correct (delay)
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
    // correct
    // setValue((currentState) => {
    //   return currentState + 1;
    // });
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
