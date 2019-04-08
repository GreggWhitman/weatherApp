import React from "react";
import PropTypes from "prop-types";

import { Forecast } from "./styled.js";
import MiniWeather from "./mini-weather";

WeatherReady.propTypes = {
  forecast: PropTypes.object.isRequired
};

function WeatherReady(props) {
  const { forecast } = props;
  const roundTemp = temp => {
    return `${Math.round(temp)}°C`;
  };

  const forecastList = forecast.consolidated_weather;

  return (
    <Forecast>
      {forecastList.map(forecast => {
        let date = new Date(forecast.applicable_date);
        date = date.toLocaleDateString();
        return (
          <MiniWeather
            key={forecast.id}
            title={date}
            weatherIconKey={forecast.weather_state_abbr}
            weather={forecast.weather_state_name}
            theTemp={roundTemp(forecast.the_temp)}
            maxTemp={roundTemp(forecast.max_temp)}
            minTemp={roundTemp(forecast.min_temp)}
          />
        );
      })}
    </Forecast>
  );
}

export default WeatherReady;
