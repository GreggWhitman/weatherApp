import React, { Component } from "react";
import styled from "styled-components";
import Calls from "../../calls.js";
import { WidgetWrapper, Icon } from "../../components";
import WeatherLoader from "./weather-loader.js";

class Weather extends Component {
  constructor(props) {
    super(props);
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
  _getLatLongLocation = position => {
    const call = Calls.getLatLongLocation;
    call({
      query: `${position.coords.latitude},${position.coords.longitude}`,
      handler: this._locationResponseHandler
    });
  };

  //callbacks
  _locationResponseHandler = (data, feedback) => {
    this.setState({ data: data, callFeedback: feedback });
  };

  //private

  _getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._getLatLongLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  _handleSelectLocation = e => {
    this.setState({
      woeid: e.target.value,
      searchValue: e.target.name,
      data: []
    });
    e.preventDefault();
  };

  _handleInputChange = e => {
    this.setState({ searchValue: e.target.value }, () => {
      if (this.state.searchValue && this.state.searchValue.length > 1) {
        this._getLocation();
      } else {
        this.setState({ data: [] });
      }
    });
  };

  _handleEnter = e => {
    if (e.key === "Enter" && this.state.data && this.state.data.length > 0) {
      this.setState({
        woeid: this.state.data[0].woeid,
        searchValue: this.state.data[0].title,
        data: []
      });
      e.preventDefault();
    }
  };

  render() {
    return (
      <WidgetWrapper>
        <WeatherWrapper>
          {this.state.woeid && <WeatherLoader woeid={this.state.woeid} />}
        </WeatherWrapper>
        <SearchWrapper>
          <LocationButton onClick={this._getGeolocation} active={true}>
            <Icon icon={"mdi mdi-crosshairs-gps"} />
          </LocationButton>
          <SearchBar>
            <StyledInput
              onKeyPress={this._handleEnter}
              placeholder={"Enter location"}
              type="text"
              name="search"
              value={this.state.searchValue}
              onChange={this._handleInputChange}
            />

            {this.state.data.length > 0 && (
              <OptionList>
                {this.state.data.map(item => (
                  <Option
                    key={item.woeid}
                    name={item.title}
                    value={item.woeid}
                    onClick={this._handleSelectLocation}
                  >
                    {item.title}
                  </Option>
                ))}
              </OptionList>
            )}
          </SearchBar>
        </SearchWrapper>
      </WidgetWrapper>
    );
  }
}

export default Weather;

const WeatherWrapper = styled.div`
  flex-basis: 210px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > *:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  > *:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const LocationButton = styled.button`
  margin-right: 8px;
  line-height: 28px;
  letter-spacing: 1;
  padding: 6px 6px;
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;
  font-size: 2em;
  color: ${({ theme, active }) =>
    active ? theme.color.active : theme.color.text};
  background-color: transparent;
  transition: color 0.2s ease-in, color 0.2s ease-out;
  :hover {
    color: ${({ theme, active }) =>
      active ? theme.color.text : theme.color.active};
  }
`;

const StyledInput = styled.input`
  padding: 6px 8px;
  border: 2px solid ${e => e.theme.color.border};
  font-size: 2em;
  color: ${e => e.theme.color.text};
  background-color: transparent;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 2px solid ${e => e.theme.color.border};
  border-top: none;
`;

const Option = styled.button`
  text-align: center;
  font-size: 2em;
  color: ${e => e.theme.color.text};
  background-color: transparent;
  border: none;
  transition: color 0.2s ease-in, color 0.2s ease-out;
  :hover {
    color: ${e => e.theme.color.active};
  }
`;
