import { useState } from 'react';

const ToggleChallenge = () => {
  const [isAlert, setIsAlert] = useState('');
  console.log('parent render');

  return (
    <div>
      <button className="btn" onClick={() => setIsAlert(!isAlert)}>
        toggle alert
      </button>
      {isAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  console.log('child render');
  return <div className="alert alert-danger">hello world</div>;
};
export default ToggleChallenge;
