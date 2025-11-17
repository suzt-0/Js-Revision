import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
        {/* <Route path="/weather" element={<Weather />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/404" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
