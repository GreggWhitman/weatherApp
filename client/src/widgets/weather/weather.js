import React, { Component } from "react";
import Calls from "../../calls.js";
import { Loading, Error, WidgetWrapper } from "../../components";
import WeatherLoader from "./weather-loader.js";

class Weather extends Component {
  constructor(props) {
    super(props);
    this._locationResponseHandler = this._locationResponseHandler.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleOnClick = this._handleOnClick.bind(this);
    this.state = {
      callFeedback: "loading",
      data: [],
      searchValue: "",
      woeid: null
    };
  }

  //calls
  _getLocation() {
    if (this.state.searchValue.length > 1) {
      const call = Calls.getLocation;
      call({
        query: this.state.searchValue,
        handler: this._locationResponseHandler
      });
    }
  }

  //callbacks
  _locationResponseHandler(data, feedback) {
    this.setState({ data: data, callFeedback: feedback });
  }

  //private
  _handleInputChange(e) {
    this.setState({ searchValue: e.target.value }, this._getLocation);
  }

  _handleOnClick(e) {
    this.setState({
      woeid: e.target.value,
      searchValue: e.target.name,
      data: []
    });
    e.preventDefault();
  }

  render() {
    return (
      <WidgetWrapper>
        {this.state.woeid && <WeatherLoader woeid={this.state.woeid} />}
        <input
          type="text"
          name="search"
          value={this.state.searchValue}
          onChange={this._handleInputChange}
        />
        {this.state.data.map(item => (
          <button
            key={item.woeid}
            name={item.title}
            value={item.woeid}
            onClick={this._handleOnClick}
          >
            {item.title}
          </button>
        ))}
      </WidgetWrapper>
    );
  }
}

export default Weather;
