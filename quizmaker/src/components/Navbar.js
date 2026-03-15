import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          QuizMaker
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">
                    Create Quiz
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/quizzes">
                    Quiz Listing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/quiz/1">
                    Take Quiz
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/results">
                    Results
                  </Link>
                </li>
              </>
            )}

            {!user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-danger btn-sm ms-lg-3 mt-2 mt-lg-0"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
