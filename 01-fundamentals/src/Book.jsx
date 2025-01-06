const Book = ({ id, img, title, author, children, key }) => {
  // console.log('children', children);
  // console.log('key', key); // not a prop
  // console.log('id', id);
  const handleButtonClick = () => alert(`out of stock: ${title}`);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
      <div>
        <button onClick={handleButtonClick}>Buy</button>
      </div>
    </article>
  );
};

export default Book;
