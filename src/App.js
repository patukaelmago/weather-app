import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer';
 
export default function App() {
  const [cities, setCities] = useState([]);
 /*  const apiKey='4ae2636d8dfbdc3044bede63951a019b' */
  const apiKey='3d9461e4fb5999c2bb9502bf22049935'
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City ​​not found");
        }
      });
    }
  
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }
  return (
    <div>
      <div className="App sticky-top">
        <Nav onSearch={onSearch}/>
      </div>
      <div className='p-3 bg-dark'>
      <Cards cities={cities} onClose={onClose}/>
      </div>
      <div >
      <Footer/>
      </div>
    </div>
  );
}
