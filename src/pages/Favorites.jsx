import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      <h2>Your Favorites ❤️</h2>
    </div>
  );
}