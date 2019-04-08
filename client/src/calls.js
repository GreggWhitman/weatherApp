import axios from "axios";

const CORSBYPASS = "https://api.codetabs.com/v1/proxy?quest=";

const FIO_API = "https://www.fio.cz/ib_api/rest/periods";
const FIO_EXTENSION = "transactions.json";

const WEATHER_API = "https://www.metaweather.com/api";
const WEATHER_LOCATION = "location/search/?query=";
const WEATHER_LATLONG = "location/search/?lattlong=";
const WEATHER_SEARCH = "location/";

const calls = {
  GetTransactions: ({ key, date, done, fail }) =>
    fiocall(key, date, done, fail),

  GetWeatherLocation: ({ key, done, fail }) =>
    weathercall(key, WEATHER_LOCATION, done, fail),

  GetWeatherLatLongLocation: ({ key, done, fail }) =>
    weathercall(key, WEATHER_LATLONG, done, fail),

  GetWeather: ({ key, done, fail }) =>
    weathercall(key, WEATHER_SEARCH, done, fail)
};

function weathercall(key, extension, done, fail) {
  axios
    .get(`${CORSBYPASS}${WEATHER_API}/${extension}${key}`)
    .then(response => done(response.data, "ready"))
    .catch(response => fail(response, "error"));
}

function fiocall(key, date, done, fail) {
  axios
    .get(`${CORSBYPASS}${FIO_API}/${key}/${date}/${FIO_EXTENSION}`)
    .then(response => done(response.data, "ready"))
    .catch(response => fail(response, "error"));
}

export default calls;

export const {
  GetTransactions,
  GetWeatherLocation,
  GetWeatherLatLongLocation,
  GetWeather
} = calls;
