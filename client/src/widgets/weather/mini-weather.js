import React from "react";
import PropTypes from "prop-types";

import {
  StyledMiniWeather,
  Title,
  WeatherIcon,
  TheTemp,
  WeatherRow
} from "./styled.js";

import Icon from "../../components/icon.js";

MiniWeather.propTypes = {
  title: PropTypes.string,
  weather: PropTypes.string,
  theTemp: PropTypes.string,
  minTemp: PropTypes.string,
  maxTemp: PropTypes.string,
  weatherIconKey: PropTypes.string
};

function MiniWeather(props) {
  const { title, weather, theTemp, minTemp, maxTemp, weatherIconKey } = props;
  return (
    <StyledMiniWeather>
      <Title>{title}</Title>
      <WeatherIcon
        src={`https://www.metaweather.com/static/img/weather/${weatherIconKey}.svg`}
      />
      <div>{weather} </div>
      <TheTemp>{theTemp} </TheTemp>
      <WeatherRow>
        <Icon icon={"mdi mdi-arrow-up"} />
        {maxTemp}
      </WeatherRow>
      <WeatherRow>
        <Icon icon={"mdi mdi-arrow-down"} />
        {minTemp}
      </WeatherRow>
    </StyledMiniWeather>
  );
}

export default MiniWeather;
