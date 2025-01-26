import { useEffect, useState } from 'react';

const CleanupFunctionv2 = () => {
  const [toggle, setToggle] = useState(false);
  console.log('CleanupFunction render');
  useEffect(() => {
    console.log('CleanupFunction useeffect');
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
    console.log('RandomComponent useEffect');
    const someFunc = () => {
      console.log('some func');
    };
    window.addEventListener('scroll', someFunc);
    // return () => window.removeEventListener('scroll', someFunc);
  }, []);

  return <h1>hello there</h1>;
};
export default CleanupFunctionv2;
