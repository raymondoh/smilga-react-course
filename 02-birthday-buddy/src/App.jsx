import { useState } from "react";
import PeopleList from "./components/PeopleList";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <main>
      <h3>Birthday Buddy</h3>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <PeopleList people={people} />
        <button type="button" className="btn" onClick={handleClear}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
