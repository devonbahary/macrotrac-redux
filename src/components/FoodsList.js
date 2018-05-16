import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import FoodItem from './FoodItem';

const FoodsList = ({ foods, onEdit, onRemove, canEdit, addMeal }) => (
    <ul className="FoodsList">
        <CSSTransitionGroup
          transitionName="foods"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
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
        </CSSTransitionGroup>
    </ul>
);

export default FoodsList;
