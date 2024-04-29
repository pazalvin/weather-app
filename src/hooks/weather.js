import { useQuery } from 'react-query';
import axios from 'axios';
const API_KEY = '4cca9a0b05f86a61579748c9a6a7c61d';
const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});


const fetchWeather = async({ lat, long, units }) => {
  try {
    const response = await api.get('/weather', {
      params: {
        lat,
        lon: long,
        appid: API_KEY,
        exclude: "",
        units: units
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}


const fetchWeatherForeCast = async({ lat, long, units}) => {
  try {
    const response = await api.get('/forecast', {
      params: {
        lat,
        lon: long,
        appid: API_KEY,
        units: units,
        cnt: ""
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}


export const useWeatherData = ({ lat, long, units }) => {
  return useQuery({
    queryKey: ['weather-data', lat, long, units],
    queryFn: () => fetchWeather({ lat, long, units }),
    enabled: lat !== '' && long !== '' && units !== '',
    retry: 3,
    staleTime: 60000,
    refetchOnWindowFocus: false
  });
}

export const useWeatherForeCast = ({ lat, long, units}) => {
  return useQuery({
    queryKey: ['weather-forecast-data', lat, long, units],
    queryFn: () => fetchWeatherForeCast({ lat, long, units }),
    enabled: lat !== '' && long !== '' && units !== '',
    retry: 3,
    staleTime: 60000,
    refetchOnWindowFocus: false
  });
}