import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GetWeather } from "../calls.js";
import { Loading, Error } from "../components";
import WeatherReady from "./weather-ready.js";

WeatherLoader.propTypes = {
  woeid: PropTypes.string.isRequired
};

function WeatherLoader(props) {
  const { woeid } = props;
  const [callFeedback, setCallFeedback] = useState("loading");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    GetWeather({
      key: `${woeid}`,
      done: data => {
        setWeatherData(data);
        setCallFeedback("ready");
      },
      fail: ()=>setCallFeedback("error")
    });
  }, [woeid]);

  if (callFeedback === "ready") {
    return <WeatherReady forecast={weatherData} />;
  } else if (callFeedback === "error") {
    return <Error error={"something went wrong"} />;
  } else {
    return <Loading />;
  }
}

export default WeatherLoader;
