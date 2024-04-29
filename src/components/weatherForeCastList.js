import React from 'react';
import { Image } from 'antd';
import { useWeatherForeCast } from '../hooks/weather';
import dayjs from 'dayjs';



function WeatherForeCastList(props) {

  const { data, error, isLoading, refetch} = useWeatherForeCast({ lat: props.lat, long: props.long, units:  props.units });

  const renderIcon = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
  };

  if(isLoading){
    return <p>Loading...</p>;
  }

  return (
    <>

    <div class="bg-[rgb(234,234,234)]  p-4 rounded-lg flex  flex-col justify-around items-center overflow-y-auto max-h-[450px]  ">  
    
     {data.list.map((item, index) => (
        <div class="w-[100%] flex justify-around items-center" key={index + `_${item.dt_txt}`}>
            <Image
                width={100}
                src={renderIcon(item.weather[0].icon )}
                class="w-100 sm:w-50"
            />
            
            <h4 class="text-center">{dayjs(item.dt_txt).format('h:mm:ss A')} <br />
            <p class="text-center">{ item.weather[0].description }</p>        
            </h4>

            <h4>{item?.main.temp ? item.main.temp : ""} { props.units === 'metric' ? '°' : '°F' }<br />
            </h4>
        </div>
      ))}
        
     </div>
        
    
    </>

  );
}

export default WeatherForeCastList;
