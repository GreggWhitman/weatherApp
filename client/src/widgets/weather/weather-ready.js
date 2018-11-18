import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MiniWeather from "./mini-weather";

class WeatherReady extends Component {
  static defaultProps = {
    forecast: {}
  };

  static propTypes = {
    forecast: PropTypes.object
  };

  _roundTemp(temp) {
    return `${Math.round(temp)}°C`;
  }

  render() {
    const forecastList = this.props.forecast.consolidated_weather;
    return (
      <div>
        <Forecast>
          {forecastList.map(forecast => {
            let date = new Date(forecast.applicable_date);
            date = date.toLocaleDateString();
            return (
              <MiniWeather
                key={forecast.id}
                title={date}
                weather={forecast.weather_state_name}
                theTemp={this._roundTemp(forecast.the_temp)}
                maxTemp={this._roundTemp(forecast.max_temp)}
                minTemp={this._roundTemp(forecast.min_temp)}
              />
            );

            // icon={this.props.forecast[weather].icon}
          })}
        </Forecast>
      </div>
    );
  }
}

export default WeatherReady;

const Forecast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
