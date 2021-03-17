import React, { useState, useEffect } from 'react';

/* Style */
import '../assets/styleContainers/Climate.scss'

const Climate = () => {
  const preApi = {
    "coord": {
      "lon": '',
      "lat": ''
    },
    "weather": [
      {
        "id": '',
        "main": "",
        "description": "",
        "icon": ""
      },
    ],
    "base": "",
    "main": {
      "temp":'',
      "feels_like": '',
      "temp_min": '',
      "temp_max": '',
      "pressure": '',
      "humidity": ''
    },
    "visibility": '',
    "wind": {
      "speed": '',
      "deg": ''
    },
    "rain": {
      "1h": ''
    },
    "clouds": {
      "all": ''
    },
    "dt": '',
    "sys": {
      "type": '',
      "id": '',
      "country": "CO",
      "sunrise": '',
      "sunset": ''
    },
    "timezone": '',
    "id": '',
    "name": "Bogotá",
    "cod": ''
  };

  
  
  const units = 'metric';
  const apiKey = '7a66d63ae224630b0b7900e37756f786';
  const API = `http://api.openweathermap.org/data/2.5/weather?q=bogota&units=${units}&appid=${apiKey}`;
  
  const [ weather, setWeather ] = useState(preApi);
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setWeather(data));
  }, []);
  console.log(weather)

  return(
  <div className="climate">
    <div className="city">
      <h1>{weather.name}</h1>
      <h2>{weather.sys.country}</h2>
    </div>
    <div className="weather">
      <h2>{weather.main.temp}°</h2>
      <button>Grados F/C</button>
    </div>
  </div>
)}

export default Climate;