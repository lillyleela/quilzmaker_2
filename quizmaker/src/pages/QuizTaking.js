import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/QuizTaking.css";

function QuizTaking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
  const quiz = storedQuizzes.find((q) => q.id === Number(id));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  if (!quiz) {
    return (
      <div className="container mt-5 text-center">
        <h3>Quiz not found</h3>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  const handleNext = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      let score = 0;

      quiz.questions.forEach((q, index) => {
        if (updatedAnswers[index] === Number(q.answer)) {
          score++;
        }
      });

      navigate("/results", {
        state: {
          score,
          total: quiz.questions.length,
          questions: quiz.questions,
          userAnswers: updatedAnswers,
        },
      });
    }
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        padding: "40px",
      }}
    >
      <div className="container">
        <div className="card shadow-lg border-0 p-4">
          {/* Progress Bar */}

          <div className="mb-3">
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Counter */}

          <div className="d-flex justify-content-between mb-3">
            <span className="badge bg-primary fs-6">
              Question {currentQuestion + 1}
            </span>

            <span className="badge bg-secondary fs-6">
              Total {quiz.questions.length}
            </span>
          </div>

          {/* Question */}

          <h4 className="fw-bold mb-4">{question.question}</h4>

          {/* Options */}

          <div className="row">
            {question.options.map((option, index) => (
              <div className="col-md-12 mb-3" key={index}>
                <label
                  className={`option-box p-3 d-flex align-items-center ${
                    selectedOption === index ? "selected-option" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    className="form-check-input me-3"
                    checked={selectedOption === index}
                    onChange={() => setSelectedOption(index)}
                  />

                  <span className="fw-medium">{option}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Button */}

          <div className="text-end">
            <button
              className="btn btn-lg btn-primary px-5"
              disabled={selectedOption === null}
              onClick={handleNext}
            >
              {currentQuestion === quiz.questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTaking;
