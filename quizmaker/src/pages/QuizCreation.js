import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/QuizCreation.css";
import { useNavigate } from "react-router-dom";

function QuizCreation() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ]);

  const handleQuestionChange = (value, index) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (value, qIndex, oIndex) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (value, index) => {
    const updated = [...questions];
    updated[index].answer = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizData = {
      id: Date.now(),
      title,
      questions,
    };

    // get existing quizzes
    const existingQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

    // add new quiz
    const updatedQuizzes = [...existingQuizzes, quizData];

    // save back
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes));

    alert("Quiz created successfully!");

    navigate("/quizzes"); // go to quiz list page
  };

  return (
    <div className="container py-5">
      {/* Page Header */}

      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Create New Quiz</h2>
        <p className="text-muted">
          Add questions and options to create your quiz
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Quiz Title */}

        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body">
            <label className="form-label fw-semibold">Quiz Title</label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter quiz title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Questions */}

        {questions.map((q, qIndex) => (
          <div key={qIndex} className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold text-dark">Question {qIndex + 1}</h5>
              </div>

              {/* Question Input */}

              <input
                type="text"
                className="form-control mb-4"
                placeholder="Enter your question..."
                value={q.question}
                onChange={(e) => handleQuestionChange(e.target.value, qIndex)}
                required
              />

              {/* Options */}

              <div className="row">
                {q.options.map((opt, oIndex) => (
                  <div key={oIndex} className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Option ${oIndex + 1}`}
                      value={opt}
                      onChange={(e) =>
                        handleOptionChange(e.target.value, qIndex, oIndex)
                      }
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Correct Answer */}

              <div className="mt-3">
                <label className="form-label fw-semibold">Correct Answer</label>

                <select
                  className="form-select"
                  value={q.answer}
                  onChange={(e) => handleAnswerChange(e.target.value, qIndex)}
                  required
                >
                  <option value="">Select Correct Option</option>
                  <option value="0">Option 1</option>
                  <option value="1">Option 2</option>
                  <option value="2">Option 3</option>
                  <option value="3">Option 4</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Buttons */}

        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={addQuestion}
          >
            + Add Question
          </button>

          <button type="submit" className="btn btn-primary px-4">
            Save Quiz
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuizCreation;
