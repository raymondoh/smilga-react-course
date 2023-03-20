import Question from "./Question";

const Questions = ({ questions }) => {
  const renderQuestions =
    questions &&
    questions.map(question => {
      return <Question question={question} key={question.id} />;
    });

  return (
    <section className="container">
      <h1>Questions</h1>

      {renderQuestions}
    </section>
  );
};

export default Questions;
