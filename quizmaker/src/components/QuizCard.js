import { Link } from "react-router-dom";

function QuizCard({ quiz }) {
  return (
    <div className="quiz-card">
      <h3>{quiz.title}</h3>
      <Link to={`/quiz/${quiz.id}`}>Start Quiz</Link>
    </div>
  );
}

export default QuizCard;
