import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import { ColorList, Form } from "./components";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = color => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
      toast.success("Yeah");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form onAddColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top center" />
    </main>
  );
};
export default App;
