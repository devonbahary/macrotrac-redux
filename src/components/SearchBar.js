import React from 'react';

const SearchBar = (props) => (
    <div className="SearchBar">
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="search"
        />
        <span className="search-icon ion-search"></span>
        <span
          className="reset-search-icon ion-close-round"
          onClick={props.onReset}
        ></span>
    </div>
);

export default SearchBar;
