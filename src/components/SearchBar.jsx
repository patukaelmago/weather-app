import React, { useState, useId } from "react";

export default function SearchBar({onSearch}) {
const [city, setCity] = useState('')
const id = useId();

  return (
    <div className="">
    <form onSubmit={(e) => {
      e.preventDefault();
      {onSearch(city)};
      setCity("")
    }}>
      <input className="m-2"
        id={id}
        type="text"
        placeholder=" Search your City..."
        value = {city}
        onChange={ e => setCity(e.target.value)}
      />
      <input className="text-dark mb-4 mt-2 bg-info bt rounded" type="submit" value="Add" />
    </form>
    </div>
  );
}
