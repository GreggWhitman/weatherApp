import React, { useState } from "react";
import styled from "styled-components";

import { GetWeatherLocation, GetWeatherLatLongLocation } from "../calls.js";
import { Icon, Loading, Error } from "../components";

import WeatherLoader from "./weather-loader.js";

const WidgetWrapper = styled.div`
margin: 1rem;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const WeatherWrapper = styled.div`
  flex-basis: 210px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  > *:last-child {
    margin-left: 4px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const LocationButton = styled.button`
  font-size: 24px;
  line-height: 1;
  padding: 8px 8px 7px;
  border: 2px solid ${({ theme }) => theme.color.border};
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
  line-height: 28px;
  border: 2px solid ${e => e.theme.color.border};
  font-size: 24px;
  color: ${e => e.theme.color.text};
  background-color: transparent;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > * {
    border: none;
    border-left: 2px solid ${e => e.theme.color.border};
    border-right: 2px solid ${e => e.theme.color.border};
    :last-child {
      border-bottom: 2px solid ${e => e.theme.color.border};
    }
  }
`;

const Option = styled.button`
  text-align: center;
  font-size: 2em;
  color: ${e => e.theme.color.text};
  background-color: transparent;
  transition: color 0.2s ease-in, color 0.2s ease-out;

  :hover {
    color: ${e => e.theme.color.active};
  }
`;

function Weather() {
  const [callFeedback, setCallFeedback] = useState("ready");
  const [locationData, setLocationData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [woeid, setWoeid] = useState(null);

  const getLatLongLocation = position => {
    setCallFeedback("loading");
    GetWeatherLatLongLocation({
      key: `${position.coords.latitude},${position.coords.longitude}`,
      done: data => {
        setLocationData(data);
        setCallFeedback("ready");
      },
      fail: () => setCallFeedback("fail")
    });
  };

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLatLongLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const getLocation = query => {
    setCallFeedback("loading");
    GetWeatherLocation({
      key: `${query}`,
      done: data => {
        setLocationData(data);
        setCallFeedback("ready");
      },
      fail: () => setCallFeedback("fail")
    });
  };

  const handleEnter = e => {
    if (e.key === "Enter" && locationData && locationData.length > 0) {
      setWoeid(locationData[0].woeid);
      setSearchValue(locationData[0].title);
      setLocationData(null);
      e.preventDefault();
    }
  };

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchValue(value);
    if (value && value.length > 1) {
      getLocation(value);
    } else {
      setLocationData(null);
    }
  };

  const handleSelectLocation = e => {
    setWoeid(e.target.value);
    setSearchValue(e.target.name);
    setLocationData(null);
    e.preventDefault();
  };

  return (
    <WidgetWrapper>
      <WeatherWrapper>
        {woeid && <WeatherLoader woeid={woeid} />}
      </WeatherWrapper>
      <SearchWrapper>
        <LocationButton onClick={getGeolocation} active={true}>
          <Icon icon={"mdi mdi-crosshairs-gps"} />
        </LocationButton>
        <SearchBar>
          <StyledInput
            autoComplete={"off"}
            onKeyPress={handleEnter}
            placeholder={"Enter location"}
            type="text"
            name="search"
            value={searchValue}
            onChange={handleInputChange}
          />
          <OptionList>
            {callFeedback === "loading" && <Loading />}
            {callFeedback === "error" && <Error error={"something went wrong"}/>}
            {locationData &&
              locationData.length > 0 &&
              locationData.map(item => (
                <Option
                  key={item.woeid}
                  name={item.title}
                  value={item.woeid}
                  onClick={handleSelectLocation}
                >
                  {item.title}
                </Option>
              ))}
          </OptionList>
        </SearchBar>
      </SearchWrapper>
    </WidgetWrapper>
  );
}

export default Weather;
