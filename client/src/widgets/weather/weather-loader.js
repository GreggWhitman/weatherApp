import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ErrorContext } from "../../client.js";
import { GetWeather } from "../../calls.js";
import { Loading, Error } from "../../components";
import WeatherReady from "./weather-ready.js";

WeatherLoader.propTypes = {
  woeid: PropTypes.string.isRequired
};

function WeatherLoader(props) {
  const { woeid } = props;
  const { displayError } = useContext(ErrorContext);
  const [callFeedback, setCallFeedback] = useState("loading");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    GetWeather({
      key: `${woeid}`,
      done: data => {
        setWeatherData(data);
        setCallFeedback("ready");
      },
      fail: displayError
    });
  }, [woeid]);

  if (callFeedback === "ready") {
    return <WeatherReady forecast={weatherData} />;
  } else if (callFeedback === "error") {
    return <Error error={this.state.data} />;
  } else {
    return <Loading />;
  }
}

export default WeatherLoader;
