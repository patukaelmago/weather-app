
import SearchBar from './SearchBar.jsx';
/* import './Nav.css'; */
import React from 'react';

function Nav({onSearch}) {
  
  return (
    <div className='bg black '>
      <h1 className='mb-0 text-info pt-2'>
      {"</>"}
      </h1>
      <div className='text-white'>
      <h1 className='wa'>Weather App</h1>
      </div>
      <div>
      <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
};

export default Nav;
