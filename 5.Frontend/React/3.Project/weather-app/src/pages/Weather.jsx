import { useState } from "react";
import { coordinates } from "../data/coordinates";

import { WeatherDisplay } from "../components/weather-display";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const selectedCoords = coordinates[city.toLowerCase()];
    if (!selectedCoords) {
      setError(
        "City not found. " 
      );
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedCoords.lat}&longitude=${selectedCoords.lon}&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&current=temperature_2m,precipitation,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_days=1`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="p-6 mt-6 max-w-lg mx-auto space-y-4 bg-linear-tr from-amber-100 to-amber-400 bg-amber-300 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Weather App</h1>

        <div className="flex gap-2 ">
          <input
            className="border p-2 rounded w-full "
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {data && <WeatherDisplay data={data} />}
    </>
  );
}
