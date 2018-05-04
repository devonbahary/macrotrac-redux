import React from 'react';
import FoodItem from './FoodItem';

const FoodsList = ({ foods, onEdit, onRemove, canEdit, addMeal }) => (
    <ul className="FoodsList">
        {foods.length > 0 ? (
          foods.map(food => (
            <FoodItem
              key={food.id}
              food={food}
              canEdit={canEdit}
              onRemove={onRemove}
              addMeal={addMeal}
            />
          ))
        ) : (
          <FoodItem key='0' />
        )}
    </ul>
);

export default FoodsList;
