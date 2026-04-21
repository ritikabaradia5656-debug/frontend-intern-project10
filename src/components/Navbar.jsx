import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      {/* LOGO */}
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Travel App ✈️
      </h2>

      {/* NAV LINKS */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">Home</Link>

        <Link to="/trips" style={{ marginLeft: "15px" }}>
          My Trips
        </Link>

        {/* USER SECTION */}
        {user ? (
          <>
            <span style={{ marginLeft: "15px" }}>
              Hi, {user}
            </span>

            <button
              className="secondary"
              onClick={handleLogout}
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ marginLeft: "15px" }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}