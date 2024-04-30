import React from 'react';
import { Result } from 'antd';
import { useWeatherForeCast } from '../hooks/weather';
import dayjs from 'dayjs';



function WeatherForecastList(props) {

  const { data, error, isLoading } = useWeatherForeCast({ lat: props.lat, long: props.long, units:  props.units });

  const renderIcon = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
  };

  if(isLoading){
    return <p>Loading...</p>;
  }

  if(error){
    return '';
  }

  return (
    <>
    <div class="bg-[rgb(234,234,234)]  p-4 rounded-lg flex  flex-col justify-around items-center ">  
     {data.list.map((item, index) => (
        <div class="w-[100%] flex justify-around gap-[10px] items-center" key={index + `_${item.dt_txt}`}>
            <img src={renderIcon(item.weather[0].icon)}  class="w-[100px] 2xs:w-[60px]"/>
            <p className="text-center">{dayjs(item.dt_txt).format('MM-DD h:mm')} <br />
            <p class="text-center font-bold">{ item.weather[0].description }</p>        
            </p>
            <h4>{item?.main.temp ? item.main.temp : ""} { props.units === 'metric' ? '°' : '°F' }<br />
            </h4>
        </div>
      ))}
     </div> 
    </>
  );
}

export default WeatherForecastList;
