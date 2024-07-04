import axios from 'axios';

export const getWeatherByLocation = async (city) => {
    return await axios.get(`${process.env.URL_OPEN_WEATHER}weather?q=${city}&APPID=${process.env.API_KEY_OPEN_WEATHER}`);
};

export const getForecast = async (city) => {
    return await axios.get(`${process.env.URL_OPEN_WEATHER}forecast?q=${city}&APPID=${process.env.API_KEY_OPEN_WEATHER}`);
}