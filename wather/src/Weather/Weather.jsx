import React, { useState, useEffect } from 'react';
import "./Weather.css"


const Weather = () => {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('Sieradz');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputValue);
  };

  useEffect(() => {
    const API_KEY = '5ce7e76f126f8274300cce6c45ee2d55';
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pl`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd sieci');
        }
        return response.json();
      })
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error:', error));
  }, [city]);

  return (
    <div>
          <form onSubmit={handleSubmit}>
             <div className='weatherForm'>
                 <input className='weatherInput' type="text" value={inputValue} onChange={handleInputChange} placeholder ="Wpisz nazwę miasta" />
                 <button className='watherButton' type="submit">Pokaż pogodę</button>
             </div>
          </form>
      {weatherData && (
        <div className='weatherDiv'>
              <h1 className='weather-h1'>{weatherData.name}</h1>
                    <p>Temperatura odczuwalna:</p>
                    <p className='weatherP'>{Math.round(weatherData.main.feels_like - 273.15)}°C</p>
                    <p className='weatherP'>{weatherData.weather[0].description}</p>
                    <p>Wiatr:</p>
                    <p className='weatherP'>{weatherData.wind.speed} km/h</p>
                    <p>Ciśnienie atmosferyczne</p>
                    <p className='weatherP'>{weatherData.main.pressure} hPa</p>
                    <p>Poziom zachmurzenia:</p>
                    <p className='weatherP'>{weatherData.clouds.all} %</p>
          </div>
      )}
    </div>
  );
};

export default Weather;