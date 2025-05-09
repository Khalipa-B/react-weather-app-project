import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const apiKey = "2a2eaa51d996796495bf456e5b58adf4";
    const lat = props.coordinates.lat;
    const lon = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.list.filter((_, index) => index % 8 === 0));
    });
  }, [props.coordinates]);

  if (!forecast) {
    return null;
  }

  return (
    <div className="WeatherForecast mt-3">
      <h3>5-Day Forecast</h3>
      <div className="row">
        {forecast.map((day, index) => (
          <div className="col" key={index}>
            <div className="WeatherForecast-day">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              width="42"
            />
            <div className="WeatherForecast-temp">
              <span className="max">{Math.round(day.main.temp_max)}°</span>
              <span className="min text-muted ms-1">
                {Math.round(day.main.temp_min)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
