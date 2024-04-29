import React from 'react';
import { useWeatherData } from '../hooks/weather'
import { Segmented,Spin } from 'antd';


function WeatherCard(props) {
  
  const { data, error, isLoading, refetch} = useWeatherData({ lat: props.lat, long: props.long, units:  props.units });
  const renderIcon = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
  };

  return (
    <>
      <div class="bg-[rgb(234,234,234)]  p-4 rounded-lg flex flex-col justify-evenly items-center">  
        <div class="flex justify-end items-center w-[100%]">
        <Segmented
          defaultValue="metric"
           options={[
             {
               label: '°',
               value: 'metric',
               icon: "",
             },
             {
               label: '°F',
               value: 'imperial',
               icon: "",
             },
           ]}
           onChange={props.handleChange}
         />
        </div>
 
         { !isLoading ? 
         <section>
          <h4 class="font-bold text-center">{data?.name ? data.name : ""}</h4>
          <h1 class="text-[50px] text-center">{data?.main.temp ? data.main.temp : ""} { props.units === 'metric' ? '°' : '°F' }</h1>
          <div class="flex items-center gap-[20px] justify-center">

            <div>
            <img src={renderIcon(data.weather ? data.weather[0].icon : "" )} alt={data.weather[0].description ? data.weather[0].description : ""} width={80} />
            <p class="text-center">{data.weather[0].description ? data.weather[0].description : ""}</p>
            </div>
          </div>

         </section> : 
          <Spin spinning={isLoading} />
         }

        <div class="flex items-center justify-around gap-[20px] mt-[40px] w-[100%] flex-wrap">

        <div class='text-center'>
          <p>{data?.main.feels_like ? data.main.feels_like : ""} { props.units === 'metric' ? '°' : '°F' }</p>
          <p class="font-bold">Feels like</p>
        </div>

        <div  class='text-center'>
          <p>{data?.main.humidity ? data.main.humidity : ""} %</p>
          <p  class="font-bold">Humidity</p>
        </div>

        <div  class='text-center'>
          <p>{data?.main.pressure ? data.main.pressure : ""} </p>
          <p  class="font-bold">Pressure</p>
        </div>

        <div  class='text-center'>
          <p>{data?.main.temp_max ? data.main.temp_min : ""} { props.units === 'metric' ? '°' : '°F' }</p>
          <p  class="font-bold">Min Temp</p>
        </div>

        <div  class='text-center'>
          <p>{data?.main.temp_min ? data.main.temp_max : ""} { props.units === 'metric' ? '°' : '°F' }</p>
          <p class="font-bold">Max Temp</p>
        </div>

        <div  class='text-center'>
          <p>{data?.wind.speed ? data.wind.speed : ""} </p>
          <p class="font-bold">Wind Speed</p>
        </div>

        </div>        
       </div>


    </>

  );
}

export default WeatherCard;
