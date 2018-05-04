import React from 'react';

const LargeButton = ({ isSubmit, onClick, buttonText, isWarning }) => (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={isSubmit ? "LargeButton--submit" : isWarning ? "LargeButton--warning" : "LargeButton"}
      onClick={onClick}
    >
      {buttonText}
    </button>
);

export default LargeButton;
