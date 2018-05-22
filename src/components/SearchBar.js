import React from 'react';

const SearchBar = ({ value, onChange, onReset }) => (
    <div className="SearchBar">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="search"
        />
        <span className="search-icon ion-search"></span>
        <span
          className="reset-search-icon ion-close-round"
          onClick={onReset}
        ></span>
    </div>
);

export default SearchBar;
