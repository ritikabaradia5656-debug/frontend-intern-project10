import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import BookingSuccess from "./pages/BookingSuccess";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import MyTrips from "./pages/MyTrips";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<Detail />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/login" element={<Login />} /> {/* ✅ IMPORTANT */}
        <Route path="/trips" element={<MyTrips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;