import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/weatherCard';
import WeatherForecastList from '../components/weatherForecastList';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function DetailsPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [units, setUnits] = useState('metric');
  const [location, setLocation] = useState({
    long: null,
    lat: null
  });

  useEffect(() => {
    const lon = searchParams.get('long');
    const lat = searchParams.get('lat');
    if (lon && lat) {
      setLocation({ long: lon, lat: lat });
    }
  }, [searchParams]);

  const handleChange = (newValue) => {
    setUnits(newValue);
  };

  const { long, lat } = location; 

  return (
    <section className="flex justify-center h-[auto] pt-4 pb-4">
      <div className="w-full max-w-[1280px] min-w-[350px] px-6 sm:px-20 mx-auto">
        <WeatherCard lat={lat} long={long} units={units} handleChange={handleChange} />
        <section className="mt-[30px]">
          <WeatherForecastList lat={lat} long={long} units={units} />
        </section>
      </div>
    </section>
  );
}

export default DetailsPage;
