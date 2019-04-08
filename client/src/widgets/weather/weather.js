import React, { useState, useContext } from "react";
import { ErrorContext } from "../../client.js";
import { GetWeatherLocation, GetWeatherLatLongLocation } from "../../calls.js";
import { WidgetWrapper, Icon, Loading } from "../../components";

import WeatherLoader from "./weather-loader.js";

import {
  WeatherWrapper,
  SearchWrapper,
  SearchBar,
  LocationButton,
  StyledInput,
  OptionList,
  Option
} from "./styled.js";

function Weather() {
  const { displayError } = useContext(ErrorContext);
  const [callFeedback, setCallFeedback] = useState("ready");
  const [locationData, setLocationData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [woeid, setWoeid] = useState(null);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLatLongLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const getLatLongLocation = position => {
    setCallFeedback("loading");
    GetWeatherLatLongLocation({
      key: `${position.coords.latitude},${position.coords.longitude}`,
      done: data => {
        setLocationData(data);
        setCallFeedback("ready");
      },
      fail: displayError
    });
  };

  const getLocation = query => {
    setCallFeedback("loading");
    GetWeatherLocation({
      key: `${query}`,
      done: data => {
        setLocationData(data);
        setCallFeedback("ready");
      },
      fail: displayError
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

// class Weather extends Component {
//   //calls

//   //callbacks
//   _locationResponseHandler = (data, feedback) => {
//     this.setState({ data: data, callFeedback: feedback });
//   };

//   //private

//   _handleSelectLocation = e => {
//     this.setState({
//       woeid: e.target.value,
//       searchValue: e.target.name,
//       data: []
//     });
//     e.preventDefault();
//   };

//

//   render() {

//   }
// }

export default Weather;
