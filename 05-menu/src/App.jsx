import { useState } from "react";
import { MenuList, Title, Categories } from "./components";
import data from "./data";

//const tempCategories = data.map(item => item.category);
//const tempSet = new Set(tempCategories);
// turn it into array
//const tempArray = ["all", ...tempSet];
//console.log(tempArray);
// all on one line
const allCategories = ["all", ...new Set(data.map(item => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterCategories = category => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter(item => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="title">
        <Title text="Our menu" />
        <Categories categories={categories} filterCategories={filterCategories} />
        <MenuList menu={menu} />
      </section>
    </main>
  );
};
export default App;
