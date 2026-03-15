import { useLocation, Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function QuizResults() {
  const location = useLocation();

  // Safe destructuring
  const {
    score = 0,
    total = 0,
    questions = [],
    userAnswers = [],
  } = location.state || {};

  const wrong = total - score;

  const data = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [score, wrong],
        backgroundColor: ["#22c55e", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };

  const percentage = total ? ((score / total) * 100).toFixed(1) : 0;

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
          <h2 className="text-center mb-4 fw-bold">Quiz Results 🎉</h2>

          {/* Score Section */}

          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <Pie data={data} />
            </div>

            <div className="col-md-6 text-center">
              <h4 className="text-muted">Your Score</h4>

              <h1 className="display-4 text-primary">
                {score} / {total}
              </h1>

              <h3 className="text-success">{percentage}% Correct</h3>
            </div>
          </div>

          <hr className="my-4" />

          {/* Questions Review */}

          <h4 className="mb-3">Question Review</h4>

          {questions.length === 0 ? (
            <p className="text-muted">No question data available</p>
          ) : (
            questions.map((q, index) => {
              const userAnswer = userAnswers[index];

              return (
                <div key={index} className="mb-4 p-3 border rounded">
                  <h6>
                    Q{index + 1}. {q.question}
                  </h6>

                  <p>
                    Your Answer:
                    <span
                      className={
                        userAnswer === Number(q.answer)
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {" "}
                      {q.options[userAnswer]}
                    </span>
                  </p>

                  <p className="text-success">
                    Correct Answer: {q.options[q.answer]}
                  </p>
                </div>
              );
            })
          )}

          {/* Buttons */}

          <div className="text-center mt-4">
            <Link to="/quizzes" className="btn btn-primary me-3">
              Take Another Quiz
            </Link>

            <Link to="/create" className="btn btn-outline-secondary">
              Create Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizResults;
