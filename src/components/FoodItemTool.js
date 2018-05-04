import React from 'react';

const FoodItemTool = ({ iconClass, buttonText, onClick, active }) => (
    <div
      className={active ? "FoodItemTool active" : "FoodItemTool"}
      onClick={onClick}
    >
        <div className="FoodItemTool__icon">
            <div className={iconClass}></div>
        </div>
        <div className="FoodItemTool__button">
            {buttonText}
        </div>
    </div>
);

export default FoodItemTool;
