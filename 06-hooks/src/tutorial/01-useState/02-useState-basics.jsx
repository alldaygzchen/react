import { useState, useEffect } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState("Nothing");

  console.log("the outer count", count); // new value
  console.log("the outer alert", alert); // new value

  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    console.log("the button count", count); //old value
    console.log("the button alert", alert); //old value
  };
  const alertClick = () => {
    // console.log(count)
    setAlert("alert");
    console.log("the button count", count); //old value
    console.log("the button alert", alert); //old value
  };
  useEffect(() => {
    console.log("the useEffect count", count); // new value
    console.log("the useEffect alert", alert); // new value
  }, [count, alert]);

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <h4>You clicked alert: {alert}</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
      <span></span>
      <button className="btn" onClick={alertClick}>
        Alert
      </button>
    </div>
  );
};

export default UseStateBasics;
