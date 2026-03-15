import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

    setQuizzes(storedQuizzes);
  }, []);

  return (
    <div className="container py-5">
      {/* Page Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Available Quizzes</h2>

        <Link to="/create" className="btn btn-success">
          + Create Quiz
        </Link>
      </div>

      {/* If No Quizzes */}

      {quizzes.length === 0 && (
        <div className="text-center mt-5">
          <h4 className="text-muted">No quizzes available</h4>
          <p>Create your first quiz to get started</p>

          <Link to="/create" className="btn btn-primary">
            Create Quiz
          </Link>
        </div>
      )}

      {/* Quiz Cards */}

      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{quiz.title}</h5>

                <p className="text-muted">{quiz.questions.length} Questions</p>

                <Link to={`/quiz/${quiz.id}`} className="btn btn-primary w-100">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizList;
