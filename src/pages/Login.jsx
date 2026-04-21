import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) {
      alert("Enter username");
      return;
    }

    login(username);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter name"
        className="search"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}