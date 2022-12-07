import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, country}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger ">X</button>
        </div>
        <div className="card-body">
          <div className='d-flex flex-row mb-1 mt-2'>
            <h3 className="card-title d-flex justify-content-center ">{name}</h3>
            <h3 className='ml-2 d-flex align-items-top'>({country})</h3>
          </div>
          <hr className='text-black-50 mt-0'/>
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="iconoClima" />
            </div>
          </div>
        </div>
      </div>
    );
};

