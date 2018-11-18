import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../../components";

class MiniWeather extends Component {
  static defaultProps = {
    title: "",
    weather: "",
    theTemp: "",
    minTemp: "",
    maxTemp: "",
    weatherIconKey: "",
    icon: "mdi mdi-home"
  };

  static propTypes = {
    title: PropTypes.string,
    weather: PropTypes.string,
    theTemp: PropTypes.string,
    minTemp: PropTypes.string,
    maxTemp: PropTypes.string,
    weatherIconKey: PropTypes.string,
    icon: PropTypes.string
  };

  render() {
    return (
      <StyledMiniWeather>
        <Title>{this.props.title}</Title>
        <WeatherIcon
          src={`https://www.metaweather.com/static/img/weather/${
            this.props.weatherIconKey
          }.svg`}
        />
        <div>{this.props.weather} </div>
        <TheTemp>{this.props.theTemp} </TheTemp>
        <div>
          <Icon icon={"mdi mdi-arrow-up"} />
          {this.props.maxTemp}
        </div>
        <div>
          <Icon icon={"mdi mdi-arrow-down"} />
          {this.props.minTemp}
        </div>
      </StyledMiniWeather>
    );
  }
}

export default MiniWeather;

const WeatherIcon = styled.img``;

const TheTemp = styled.div`
  font-size: 1.4em;
`;

const StyledMiniWeather = styled.div`
  margin: 0.5rem;
`;

const Title = styled.header`
  font-size: 1.2em;
  white-space: nowrap;
`;
