import { useState } from 'react';
import data from './data';
import List from './List';
import styles from './BirthdayBuddy.module.css';

function BirthdayBuddy() {
  const [people, setPeople] = useState(data);
  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className={styles.container}>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clearPeople}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default BirthdayBuddy;
