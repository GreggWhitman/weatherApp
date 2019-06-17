import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../components/icon.js";

const MiniWeatherWrapper  = styled.div`
margin: 0.5rem;
`;

const Title = styled.header`
  font-size: 1.2em;
  white-space: nowrap;
`;

const WeatherIcon = styled.img``;

const TheTemp = styled.div`
  font-size: 1.4em;
`;

const WeatherRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


function MiniWeather(props) {
  const { title, weather, theTemp, minTemp, maxTemp, weatherIconKey } = props;
  return (
    <MiniWeatherWrapper>
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
    </MiniWeatherWrapper>
  );
}

MiniWeather.propTypes = {
  title: PropTypes.string,
  weather: PropTypes.string,
  theTemp: PropTypes.string,
  minTemp: PropTypes.string,
  maxTemp: PropTypes.string,
  weatherIconKey: PropTypes.string
};

export default MiniWeather;
