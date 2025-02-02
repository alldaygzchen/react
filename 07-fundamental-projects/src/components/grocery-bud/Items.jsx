import SingleItem from './SingleItem';

const Items = ({ items, removeItem, editItem, updateItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
