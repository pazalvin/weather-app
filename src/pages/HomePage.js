import React, { useState, useEffect} from 'react';
import { useFindCity } from '../hooks/weather';
import { Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;

function HomePage() {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (value) =>{
    value = value.toString().toLowerCase();
    value = value.replace(/\s+/g, ',')
    setSearchInput(value);
  }

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const { data, error, isLoading} = useFindCity({ city: searchInput });


  useEffect(() => {
    if (!isLoading && data) {
      openNotificationWithIcon('success', 'City found', 'Successfully searched your desired city!');
      navigate(`/details?long=${data[0].lon}&lat=${data[0].lat}`);
    }
    if (error) {
      openNotificationWithIcon('error', 'City invalid', 'Please check the pattern you are inputting; the city must be followed by the country code like this: City, CountryCode!');
    }
  }, [isLoading, data, error, navigate, api]);


  return (
    <>
    {contextHolder}
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-[800px] min-w-[350px] px-6 md:px-20 mx-auto">
    
        <h1 className="pb-4 text-center">Let's get started</h1>
        <div className="flex justify-center">
         <Search placeholder="Olongapo PH" enterButton="Search" size="large" loading={isLoading} onSearch={handleSearch} onPressEnter={handleSearch} />
        </div>
      </div>
    </section>
    </>
  );
}

export default HomePage;



