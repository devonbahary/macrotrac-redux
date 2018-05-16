import React from 'react';

const CommonButton = ({
  iconClass,
  buttonText,
  onClick,
  active,
  disabled
}) => (
    <div
      className={disabled ? "CommonButton--disabled" : active ? "CommonButton active" : "CommonButton"}
      onClick={onClick}
    >
        <div className="CommonButton__icon">
            <div className={iconClass}></div>
        </div>
        <div className="CommonButton__button">
            {buttonText}
        </div>
    </div>
);

export default CommonButton;
