import { Link } from "react-router-dom";

export default function TravelCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} />

      <h3>{item.title}</h3>

      <p style={{ fontSize: "12px", color: "#64748b" }}>
        {item.type === "destination" && "🌍 Destination"}
        {item.type === "hotel" && "🏨 Hotel"}
        {item.type === "flight" && "✈️ Flight"}
      </p>

      <p style={{ fontSize: "12px", color: "#64748b" }}>
        📍 {item.location}
      </p>

      <p>
        {item.type === "hotel" && `From $${item.price} / night`}
        {item.type === "flight" && `$${item.price} one way`}
        {item.type === "destination" && "Explore destination"}
      </p>

      {/* ✅ CLICKABLE FOR ALL TYPES */}
      <div className="card-actions">
        <Link to={`/destination/${item.id}`}>
          <button className="primary">
            {item.type === "destination" ? "Explore" : "View"}
          </button>
        </Link>
      </div>
    </div>
  );
}