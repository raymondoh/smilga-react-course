import { useState } from "react";
import Questions from "./components/Questions";
import data from "./data";
Questions;
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = id => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions questions={questions} onToggleQuestion={toggleQuestion} activeId={activeId} />
    </main>
  );
};
export default App;
