import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDestinations } from "../utils/api";
import { useAuth } from "../context/AuthContext";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [item, setItem] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    fetchDestinations().then((data) => {
      const found = data.find((d) => d.id === Number(id));
      setItem(found);
    });
  }, [id]);

  if (!item) return <p className="container">Loading...</p>;

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return (end - start) / (1000 * 60 * 60 * 24);
  };

  const total =
    item.type === "hotel"
      ? getNights() * item.price
      : item.price;

  // ✅ SAVE BOOKING (USER-SPECIFIC)
  const saveBooking = (booking) => {
    if (!user) return; // safety

    const key = `bookings_${user}`;

    const existing =
      JSON.parse(localStorage.getItem(key)) || [];

    existing.push(booking);

    localStorage.setItem(key, JSON.stringify(existing));
  };

  return (
    <div className="container detail">
      <img src={item.image} />

      <div className="detail-info">
        <h2>{item.title}</h2>

        <p>📍 {item.location}</p>

        <p style={{ margin: "10px 0" }}>{item.description}</p>

        {/* 🌍 DESTINATION */}
        {item.type === "destination" && (
          <button
            className="primary"
            onClick={() => navigate("/")}
          >
            Explore Hotels
          </button>
        )}

        {/* 🏨 HOTEL */}
        {item.type === "hotel" && (
          <>
            <h3>${item.price} / night</h3>

            <input
              type="date"
              className="search"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />

            <input
              type="date"
              className="search"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />

            {getNights() > 0 && <h3>Total: ${total}</h3>}

            <button
              className="primary"
              onClick={() => {
                if (!user) {
                  alert("Please login");
                  navigate("/login");
                  return;
                }

                if (!checkIn || !checkOut) {
                  alert("Select dates");
                  return;
                }

                const booking = {
                  id: Date.now(),
                  title: item.title,
                  location: item.location,
                  total,
                  type: item.type,
                };

                saveBooking(booking);

                navigate("/success", { state: booking });
              }}
            >
              Book Now
            </button>
          </>
        )}

        {/* ✈️ FLIGHT */}
        {item.type === "flight" && (
          <>
            <h3>${item.price}</h3>

            <button
              className="primary"
              onClick={() => {
                if (!user) {
                  alert("Please login");
                  navigate("/login");
                  return;
                }

                const booking = {
                  id: Date.now(),
                  title: item.title,
                  location: item.location,
                  total: item.price,
                  type: item.type,
                };

                saveBooking(booking);

                navigate("/success", { state: booking });
              }}
            >
              Book Flight
            </button>
          </>
        )}
      </div>
    </div>
  );
}