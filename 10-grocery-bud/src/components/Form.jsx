import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) {
      console.log("Field must not be empty");
      toast.error("field must not be empty");
      return;
    }
    onAddItem(newItem);
    console.log(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} className="form-input" />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
