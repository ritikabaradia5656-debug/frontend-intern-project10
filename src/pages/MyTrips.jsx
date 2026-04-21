import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function MyTrips() {
  const [trips, setTrips] = useState([]);
  const { user } = useAuth(); // ✅ use context

  useEffect(() => {
    if (!user) {
      setTrips([]);
      return;
    }

    const saved =
      JSON.parse(localStorage.getItem(`bookings_${user}`)) || [];

    console.log("USER BOOKINGS:", saved);

    setTrips(saved);
  }, [user]);

  return (
    <div className="container">
      <h1>My Trips ✈️</h1>

      {!user ? (
        <p className="empty">Please login to see your trips</p>
      ) : trips.length === 0 ? (
        <p className="empty">No bookings yet</p>
      ) : (
        trips.map((trip) => (
          <div className="cart-item" key={trip.id}>
            <h3>{trip.title}</h3>

            <p style={{ color: "#64748b", fontSize: "13px" }}>
              {trip.type === "hotel" && "🏨 Hotel"}
              {trip.type === "flight" && "✈️ Flight"}
              {!trip.type && "✈️ Booking"}
            </p>

            <p>📍 {trip.location}</p>
            <h4>Total: ${trip.total}</h4>
          </div>
        ))
      )}
    </div>
  );
}