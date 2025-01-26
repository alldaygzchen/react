import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  // while fetching data
  const [isLoading, setIsLoading] = useState(true);
  console.log('render');

  useEffect(() => {
    console.log('setTimeout start');
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
      console.log('setTimeout end');
    }, 7000);
    console.log('setTimeout ongoing');
  }, []);

  // can return entire app
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>My App</h2>;
};
export default MultipleReturnsBasics;
