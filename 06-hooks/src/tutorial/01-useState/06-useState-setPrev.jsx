import { useState, useEffect } from 'react';

const UseStateBasicsPrev = () => {
  const [count, setCount] = useState(0);
  console.log('render');
  console.log('the outer count', count); // new value

  const handleClick = () => {
    setCount((prevCount) => {
      let newCount = prevCount + 1;
      console.log('the button new count', newCount); // new value
      return newCount;
    });
    console.log('the button count', count); //not works but exeuctes first
  };

  useEffect(() => {
    console.log('the useEffect count', count); // new value
  }, [count]);

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
      <span></span>
    </div>
  );
};

export default UseStateBasicsPrev;
