import axios from "axios";

const API = "https://www.metaweather.com/api/location/";
const useMocks = false;

const calls = {
  getLocation: ({ query, handler }) => {
    if (useMocks) {
      axios
        .get(`../mocks/getLocation.json`)
        .then(response => handler(response.data, "ready"))
        .catch(response => handler(response, "error"));
    } else {
      axios
        .get(`${API}search/?query=${query}`)
        .then(response => handler(response.data, "ready"))
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
        .then(response => handler(response.data, "ready"))
        .catch(response => handler(response, "error"));
    }
  }
};

export default calls;
