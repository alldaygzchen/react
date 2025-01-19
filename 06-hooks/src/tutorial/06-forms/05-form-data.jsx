import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);
  console.log('render');
  console.log('value', value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log('formData', formData);
    // get values one by one
    const name = formData.get('name');
    console.log('name', name);
    // get all of them
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log('newUser', newUser);
    // Gotcha - re-render won't clear out the values
    setValue(value + 1);
    // reset values
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* <button
        onClick={(e) => {
          console.log('target:', e.target);
          console.log('currentTarget:', e.currentTarget);
        }}
      >
        Click me
        <span>Inner element</span>
      </button> */}
    </div>
  );
};
export default UncontrolledInputs;