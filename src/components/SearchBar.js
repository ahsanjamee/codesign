import React from "react";

import search from '../assets/search.png';

const SearchBar = () => {
  return (
    <div className="search">
      <p>Search Photos and Videos</p>
      <img src={search} alt="search" />
    </div>
  );
};

export default SearchBar;
