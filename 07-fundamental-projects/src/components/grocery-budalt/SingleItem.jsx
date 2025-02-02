import { useState, useRef, useEffect } from 'react';
const SingleItem = ({ item, removeItem, editItem, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const inputRef = useRef(null);
  const [test, setTest] = useState(false);
  console.log('test', test);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsEditing(false);
      updateItem(item.id, newName);
    }
  };

  useEffect(() => {
    // console.log('useEffect1 start');
    if (isEditing) {
      console.log('isEditing');
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      //   console.log('useEffect1 cleanup');
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isEditing]);

  useEffect(() => {
    console.log('useEffect2 start');
    setTest(true);
  }, []);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <p
          style={{
            textTransform: 'capitalize',
            textDecoration: item.completed && 'line-through',
          }}
        >
          {item.name}
        </p>
      )}

      <button
        className="btn update-btn"
        type="button"
        onClick={() => handleUpdateClick()}
      >
        update
      </button>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
