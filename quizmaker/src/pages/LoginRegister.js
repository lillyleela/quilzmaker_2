import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginRegister() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // LOGIN
      if (isLogin) {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });

        alert(res.data.message);

        if (res.data.user) {
          // store logged user
          localStorage.setItem("user", JSON.stringify(res.data.user));

          // redirect to home/dashboard
          login(res.data.user);
          navigate("/");
        }
      }

      // REGISTER
      else {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          { username, email, password },
        );

        alert(res.data.message);

        // after successful register → show login form
        setIsLogin(true);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">
              {isLogin ? "Login" : "Register"}
            </h3>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input
                    className="form-control mb-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </>
              )}
              {isLogin && (
                <>
                  {" "}
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </>
              )}
              <button className="btn btn-primary w-100">
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p className="text-center mt-3">
              {isLogin ? "Don't have an account?" : "Already have an account?"}

              <button
                className="btn btn-link"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
