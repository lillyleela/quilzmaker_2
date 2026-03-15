import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/auth/register", {
      username,
      email,
      password,
    });

    alert("Registration Successful");
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
