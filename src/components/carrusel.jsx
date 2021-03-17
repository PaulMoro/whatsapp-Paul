import React, { useState, useEffect } from 'react'
import '../assets/styleContainers/Carrusel.scss';

const Carrusel = () => {
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

  const apiKey = '10224957400033410';
  const API = `https://www.superheroapi.com/api.php/${apiKey}/search/1`;
  const [ superHero, setSuper] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setSuper(data));
  }, []);
  const data = superHero.results
  console.log(data)

  return(
  <>
{/*     {data.map(item => (
      <div className="carrusel">
        <img src={item.image} alt=""/>
        <div className="name">
          <h2>{item.name}</h2>
          <h3>item</h3>
        </div>
        <div className="type">
          <img src="" alt=""/>
        </div>
      </div>
      )
    )}; */}
  </>
);}

export default Carrusel;