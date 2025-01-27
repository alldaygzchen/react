import styles from './BirthdayBuddy.module.css';
const Person = ({ image, name, age }) => {
  return (
    <article className={styles.person}>
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
