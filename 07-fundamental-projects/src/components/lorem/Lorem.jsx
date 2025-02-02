import { useState } from 'react';
// import data from './data';
import { nanoid } from 'nanoid';
import useFetch from './useFetch';

const url = '../../../../lorem.json';

const Lorem = () => {
  const { isLoading: loading, isError: error, data: data } = useFetch(url, []);
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default Lorem;
