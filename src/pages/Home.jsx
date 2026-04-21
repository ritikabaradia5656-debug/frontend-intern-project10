import { useEffect, useState } from "react";
import { fetchDestinations } from "../utils/api";
import TravelCard from "../components/TravelCard";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("destination");

  useEffect(() => {
    async function load() {
      const res = await fetchDestinations();
      setData(res);
    }
    load();
  }, []);

  // 🔍 FILTER
  const filtered = data.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType =
      type === "destination"
        ? item.type === "destination"
        : item.type === type;

    return matchSearch && matchType;
  });

  return (
    <div className="container">
      <h1>Explore Travel ✈️</h1>

      {/* TABS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          className={type === "destination" ? "primary" : "secondary"}
          onClick={() => setType("destination")}
        >
          🌍 Destinations
        </button>

        <button
          className={type === "hotel" ? "primary" : "secondary"}
          onClick={() => setType("hotel")}
        >
          🏨 Hotels
        </button>

        <button
          className={type === "flight" ? "primary" : "secondary"}
          onClick={() => setType("flight")}
        >
          ✈️ Flights
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CARDS */}
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <TravelCard key={item.id} item={item} />
          ))
        ) : (
          <p className="empty">No results found</p>
        )}
      </div>
    </div>
  );
}