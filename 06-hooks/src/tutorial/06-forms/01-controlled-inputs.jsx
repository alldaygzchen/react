import { useState } from 'react';
const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log('render');

  const handleName = (e) => {
    // for now we won't use it
    const event_name = e.target.value;
    // const value = e.target.value;
    console.log('name is changing', event_name);
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    // for now we won't use it
    // const name = e.target.name;
    const event_email = e.target.value;
    console.log('email is changing', event_email);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event_name = e.target.name.value;
    const event_email = e.target.email.value;
    console.log(event_name, event_email);

    // do something
    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          value={name}
          //   onChange={(e) => setName(e.target.value)}
          onChange={handleName}
          id="name"
          name="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          name="email"
          value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          onChange={handleEmail}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
