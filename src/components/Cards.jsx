import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
       
        {cities.map(c => <Card
            key={c.id}
            country={c.country}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Whitout cities</div>
    )
  }
}
