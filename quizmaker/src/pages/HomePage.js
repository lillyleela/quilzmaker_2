import { Link } from "react-router-dom";
import "../App.css";

function HomePage() {
  return (
    <div className="hero-section">
      <div className="hero-content text-center">
        <h1>Welcome to Online Quiz Maker</h1>

        <p>
          Create your own quizzes or test your knowledge with exciting quizzes.
        </p>

        <div className="mt-4">
          <Link to="/create">
            <button className="btn btn-primary me-3 btn-lg">Create Quiz</button>
          </Link>

          <Link to="/quizzes">
            <button className="btn btn-success btn-lg">Take Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
