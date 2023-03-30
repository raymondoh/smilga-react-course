import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import { Form, ItemList } from "./components";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

// one line
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = items => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  //const [items, setItems] = useState(getLocalStorage());
  const [items, setItems] = useState(defaultList);

  const addItem = itemName => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    //setItems([...items, newItem]);
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added");
  };

  const removeItem = itemId => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success("item removed");
  };

  const editItem = itemId => {
    const newItems = items.map(item => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-right" />
      <Form onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} onEditItem={editItem} />
    </section>
  );
};
export default App;
