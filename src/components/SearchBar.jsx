import React, { useState } from "react";

export default function SearchBar({onSearch}) {
const [city, setCity] = useState('')

  return (
    <div className="">
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input
        type="text"
        placeholder=" City..."
        value = {city}
        onChange={ e => setCity(e.target.value)}
      />
      <input className="text-dark mb-4 mt-2 bg-info bt" type="submit" value="Add" />
    </form>
    </div>
  );
}
