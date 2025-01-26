import { useState } from 'react';

const Example = () => {
  const [condition] = useState(true);
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // it is not recommend since it runs conditionally
  //   useEffect(() => {
  //     console.log("hello there");
  //   }, []);
  return <h2>example</h2>;
};

export default Example;
