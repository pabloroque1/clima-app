import { getLocationByIP } from "../services/ip-api.js";
import { getWeatherByLocation, getForecast } from "../services/openWeather.js";


export const getLocation = async (req,res) => {
    try {
        const response = await getLocationByIP();
        if(response.data.status === 'fail'){
            throw response.data;
        }
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getCurrentWeather = async (req,res) => {
    try {
        let city = req.query.city;
        if(!city){
            const response = await getLocationByIP();
            city = response.data.city;
        }
        const response = await getWeatherByLocation(city);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json(error.response.data);
    }
}

export const getForecastWeather = async (req,res) => {
    try {
        let city = req.query.city;
        if(!city){
            const response = await getLocationByIP();
            city = response.data.city;
        }
        const response = await getForecast(city);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json(error.response.data);
    }
}
