import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    navigate(`/weather/?city=${city.trim()}`);
  };

  return (
    <>
      <section className="flex flex-col bg-linear-to-t from-blue-500 via-yellow-100 to-amber-300 h-161.5 w-full items-center justify-center text-white">
        <div className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
           className="bg-linear-to-t from-blue-200 via-blue-200 to-amber-200  border-amber-400 focus-within:bg-linear-to-b outline-amber-300 text-slate-900 text-2xl p-2"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
}
