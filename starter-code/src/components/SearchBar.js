import React, { Component } from 'react';

const SearchBar = props => {
  const handleChange = e => {
    props.updateSearchText(e.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <input type="text" value={props.search} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
