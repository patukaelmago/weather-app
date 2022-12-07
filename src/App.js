import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer';
import env from "react-dotenv";

 
export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = env.API_KEY;
 /*  const apiKey='4ae2636d8dfbdc3044bede63951a019b' */
  /* const apiKey='3d9461e4fb5999c2bb9502bf22049935' */
  function onSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((r) => r.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const newCity = {
            key: resource.id,
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon,
            country: resource.sys.country
          };
          setCities((oldCities)=>{
            if (oldCities.some((city) => city.name === newCity.name)){
              return oldCities;
            } else {
              return [...oldCities, newCity];
            }
          });
        } else {
          alert("City ​​not found");
        }
      });
    }
  
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  
  return (
    <div>
      <div className="App sticky-top">
        <Nav onSearch={onSearch}/>
      </div>
      <div className='p-3 bg-dark'>
      <Cards 
      cities={cities} onClose={onClose}/>
      </div>
      <div >
      <Footer/>
      </div>
    </div>
  );
}
