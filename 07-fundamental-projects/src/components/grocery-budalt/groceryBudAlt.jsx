import { useState, useEffect } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import useFetch from "./useFetch";

const url = "../../../../groceryBudAlt.json";

const GroceryBudAlt = () => {
  // const [items, setItems] = useState(defaultList);
  const {
    isLoading: loading,
    isError: error,
    data: fetchedItems,
  } = useFetch(url, []);
  const [items, setItems] = useState([]);
  console.log("GroceryBudALt Render", fetchedItems, loading, error);

  useEffect(() => {
    console.log("groceryBudAlt useeffect", fetchedItems);
    if (fetchedItems && fetchedItems.length > 0) {
      setItems(fetchedItems);
    }
  }, [fetchedItems]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };

  const updateItem = (itemId, newName) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, name: newName };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        editItem={editItem}
        updateItem={updateItem}
      />
    </section>
  );
};
export default GroceryBudAlt;
