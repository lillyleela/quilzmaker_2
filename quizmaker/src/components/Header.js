import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h2>Quiz Maker</h2>

      <Link to="/">Home</Link>
      <Link to="/quizzes">Take Quiz</Link>
      <Link to="/create">Create Quiz</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Header;
