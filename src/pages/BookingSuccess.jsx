import { useLocation, useNavigate } from "react-router-dom";

export default function BookingSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No booking found</p>;

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>🎉 Booking Confirmed</h1>

      <h2>{state.title}</h2>
      <p>📍 {state.location}</p>

      <h3>Total Paid: ${state.total}</h3>

      <button className="primary" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}