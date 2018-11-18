import React, { Component } from "react";
import PropTypes from "prop-types";
import Calls from "../../calls.js";
import { Loading, Error } from "../../components";
import WeatherReady from "./weather-ready.js";

class WeatherLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { callFeedback: "loading", data: {}, searchValue: "" };
  }

  static defaultProps = {
    woeid: null
  };

  static propTypes = {
    woeid: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  //reactLifeCycle
  componentDidMount() {
    this._getWeather();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.woeid !== this.props.woeid) {
      this._getWeather();
    }
  }

  //calls
  _getWeather() {
    this.setState({ callFeedback: "loading" });
    let call = Calls.getWeather;
    call({
      query: this.props.woeid,
      handler: (data, feedback) => this._weatherResponseHandler(data, feedback)
    });
  }

  //callbacks
  _weatherResponseHandler(data, feedback) {
    this.setState({ weatherData: data, callFeedback: feedback });
  }

  //private

  render() {
    const callFeedback = this.state.callFeedback;
    let forecast;

    if (callFeedback === "ready") {
      forecast = <WeatherReady forecast={this.state.weatherData} />;
    } else if (callFeedback === "error") {
      forecast = <Error error={this.state.data} />;
    } else {
      forecast = <Loading />;
    }

    return forecast;
  }
}

export default WeatherLoader;
