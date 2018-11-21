import axios from "axios";

const API =
  "https://cors-proxy.htmldriven.com/?url=https://www.metaweather.com/api/location/"; //cors bypass
const useMocks = false; //not ready

const calls = {
  getLocation: ({ query, handler }) => {
    if (useMocks) {
      axios
        .get(`../mocks/getLocation.json`)
        .then(response => handler(response.body, "ready"))
        .catch(response => handler(response, "error"));
    } else {
      axios
        .get(`${API}search/?query=${query}`)
        .then(response => handler(JSON.parse(response.data.body), "ready"))
        .catch(response => handler(response, "error"));
    }
  },
  getLatLongLocation: ({ query, handler }) => {
    if (useMocks) {
      axios
        .get(`../mocks/getLocation.json`)
        .then(response => handler(response.data, "ready"))
        .catch(response => handler(response, "error"));
    } else {
      axios
        .get(`${API}search/?lattlong=${query}`)
        .then(response => handler(JSON.parse(response.data.body), "ready"))
        .catch(response => handler(response, "error"));
    }
  },
  getWeather: ({ query, handler }) => {
    if (useMocks) {
      axios
        .get(`../mocks/getWeather.json`)
        .then(response => handler(response.data, "ready"))
        .catch(response => handler(response, "error"));
    } else {
      axios
        .get(`${API}${query}/`)
        .then(response => handler(JSON.parse(response.data.body), "ready"))
        .catch(response => handler(response, "error"));
    }
  }
};

export default calls;
