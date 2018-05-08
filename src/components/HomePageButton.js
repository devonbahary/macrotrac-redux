import React from 'react';

const HomePageButton = ({ buttonText, onClick }) => (
    <button
      className="HomePageButton"
      type="button"
      onClick={onClick}
    >
        {buttonText}
    </button>
);

export default HomePageButton;
