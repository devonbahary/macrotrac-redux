import React from 'react';

const LargeButton = ({ isSubmit, onClick, buttonText, isWarning, disabled }) => (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={isSubmit ? "LargeButton--submit" : isWarning ? "LargeButton--warning" : "LargeButton"}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
);

export default LargeButton;
