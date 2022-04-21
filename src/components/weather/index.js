import { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

const Weather = () => {
    const weatherContext = useContext(WeatherContext);
    const { weatherInfo } = weatherContext;
    return (
        <div>
            <p>City Name: {weatherInfo?.name}</p>
            <p>Temperature: {weatherInfo?.main?.temp} °C</p>
            <p>Feels Like: {weatherInfo?.main?.feels_like} °C</p>
            <p>Humidity: {weatherInfo?.main?.humidity}</p>
            <p>Wind Speed: {weatherInfo?.wind?.speed}</p>
        </div>
    )
}

export default Weather;