// WeatherForecastDay.js
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return Math.round(props.data.temperature.maximum);
  }

  function minTemperature() {
    return Math.round(props.data.temperature.minimum);
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let options = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={52} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>{" "}
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
