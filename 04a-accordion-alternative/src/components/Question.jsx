import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question, onToggleQuestion, activeId }) => {
  const isActive = question.id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{question.title}</h5>
        <button className="question-btn" onClick={() => onToggleQuestion(question.id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{question.info}</p>}
    </article>
  );
};

export default Question;
