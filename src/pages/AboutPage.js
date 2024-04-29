import React, { useState } from 'react';
import WeatherCard from '../components/weatherCard';
import WeatherForeCastList from '../components/weatherForeCastList';



function DetailsPage() {

  const [units, setUnits] = useState('metric');
  const handleChange = (newValue) => {
    setUnits(newValue);
  };


  return (
    <section class="flex justify-center h-[auto] pt-4 pb-4">
      <div class="w-full max-w-[1280px] min-w-[350px] px-6 md:px-20 mx-auto">

      <WeatherCard lat="14.8314675" long="120.2835205" units={units} handleChange={handleChange}/>


      <section class="mt-[30px]">
        <div>
          <WeatherForeCastList  lat="14.8314675" long="120.2835205" units={units} />  
        </div>
      </section>

     
    </div>
    </section>
  );
}

export default DetailsPage;
