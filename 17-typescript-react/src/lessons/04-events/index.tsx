import { useState } from 'react';

type Person = {
  name: string;
  email: string;
};

function Component(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // Where the listener is attached
    // const formData = new FormData(e.target as HTMLFormElement); // What was clicked
    const data = Object.fromEntries(formData) as Person;
    // const text = formData.get('text') as string;
    // const person: Person = { name: text };
    const person = data;
    console.log('person', person);
  };
  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input mb-1"
          type="text"
          name="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="email"
          className="form-input mb-1"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
