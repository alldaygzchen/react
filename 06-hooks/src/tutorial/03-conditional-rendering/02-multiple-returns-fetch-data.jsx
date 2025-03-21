import { useEffect, useState, useCallback } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  console.log('render'); //twice

  const fetchUser = useCallback(async () => {
    try {
      const resp = await fetch(url);
      // console.log(resp);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const user = await resp.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    // hide loading
    setIsLoading(false);
  }, []);

  // do not add fetchUser as dependency, it will create infinite loop
  // create react app will give you an error if fetchUser is not added to depency => useCallback
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
