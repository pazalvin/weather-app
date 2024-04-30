import { useQuery } from 'react-query';
import axios from 'axios';
const API_KEY = '4cca9a0b05f86a61579748c9a6a7c61d';
const api = axios.create({
  baseURL: 'https://api.openweathermap.org'
});

const fetchWeather = async({ lat, long, units }) => {
  try {
    const response = await api.get('/data/2.5/weather', {
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

const findCity = async({ city }) => {
  try {
    const response = await api.get('/geo/1.0/direct', {
      params: {
        q: city,
        appid: API_KEY
      }
    });
    if(response.data.length === 0){
      throw 'City not found';
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}


const fetchWeatherForeCast = async({ lat, long, units}) => {
  try {
    const response = await api.get('/data/2.5/forecast', {
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
    retry: 1,
    staleTime: 60000,
    refetchOnWindowFocus: false
  });
}

export const useWeatherForeCast = ({ lat, long, units}) => {
  return useQuery({
    queryKey: ['weather-forecast-data', lat, long, units],
    queryFn: () => fetchWeatherForeCast({ lat, long, units }),
    enabled: lat !== '' && long !== '' && units !== '',
    retry: 1,
    staleTime: 60000,
    refetchOnWindowFocus: false
  });
}

export const useFindCity = ({ city}) => {
  return useQuery({
    queryKey: ['find-city-data', city],
    queryFn: () => findCity({ city }),
    enabled: city !== '' ,
    retry: 1,
    staleTime: 60000,
    refetchOnWindowFocus: false
  });
}