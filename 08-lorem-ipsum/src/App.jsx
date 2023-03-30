import { useState } from "react";
import { Form } from "./components";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <Form />
    </section>
  );
};
export default App;
