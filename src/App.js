import React, { useEffect, useState } from 'react';
import Loading from './components/loading';
import NotFound from './components/not-found';
import Search from './components/search';
import Weather from './components/weather';
import './App.css'
import WeatherContext from './contexts/WeatherContext';

const API_KEY = '52ce99b8361ff2d70b59024e1d87fbf0';
const defaultCityName = 'Vancouver';
const headerTitle = 'Weather Forecast'

function App() {
  const [searchValue, setSearchValue] = useState(defaultCityName);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherNotFound, setWeatherNotFound] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue])

  const onSearch = (enteredValue) => {
    setSearchValue(enteredValue);
  };

  const fetchData = (cityName) => {
    setIsLoading(true);
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName +
            "&units=metric&appid=" +
            API_KEY
      )
      .then((response) => {
        setIsLoading(false);
       if  (response.ok) { 
          setWeatherNotFound(false);
          return response.json();
        }
        setWeatherInfo(null)
        setWeatherNotFound(true);
        throw Error (response.statusText);
      })
      .then((data) => {
        setWeatherInfo(data)
      })
      .catch((error) => {
        console.log(error);
      })
  } 

  return (
    <WeatherContext.Provider value={{ weatherInfo }}>
      <div>
        <h1>{headerTitle}</h1>
        <div className='card'>
          <Search onSearch={onSearch} />  
          {!isLoading && weatherNotFound && <NotFound />}
          {!isLoading && !weatherNotFound && <Weather />}
          {isLoading && <Loading />}
          
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
