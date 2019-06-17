import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MiniWeather from "./mini-weather";

const Forecast = styled.div`
  display: flex;
`;

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
