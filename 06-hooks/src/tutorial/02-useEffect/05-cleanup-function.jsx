// render
// CleanupFunction render, CleanupFunction useeffect

// toggle mount
// CleanupFunction render,RandomComponent useEffect, hello from interval...

// toggle unmount
// CleanupFunction render,RandomComponent cleanup

// toggle mount
// CleanupFunction render,RandomComponent useEffect, hello from interval...

import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("CleanupFunction render");
  useEffect(() => {
    console.log("CleanupFunction useeffect");
  }, []);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log("RandomComponent useEffect");
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => {
      clearInterval(intID);
      console.log("RandomComponent cleanup");
    };
  }, []);

  return <h1>hello there</h1>;
};
export default CleanupFunction;
