import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import CommonButton from './CommonButton';
import InputField from './InputField';
import InputNumber from './InputNumber';

const FoodItemTools = ({
  food,
  mealServingSize,
  onServingSizeChange,
  onServingSizeIncrement,
  onServingSizeDecrement,
  onMealSubmit,
  confirmRemove,
  onRemove,
  canEdit
}) => {
    if (mealServingSize !== undefined) {
        return (
            <form onSubmit={onMealSubmit}>
                <MediaQuery minWidth={1224}>
                    <div className="FoodItemTools--two" style={{height: '100%'}}>
                        <InputNumber
                          value={mealServingSize}
                          onChange={onServingSizeChange}
                          onIncrement={onServingSizeIncrement}
                          onDecrement={onServingSizeDecrement}
                        />
                        <CommonButton
                          iconClass="add-icon ion-plus-round"
                          buttonText="Add Meal"
                          onClick={onMealSubmit}
                          food={food}
                        />
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                    <InputField
                      label='Serving Size'
                      type="number"
                      value={mealServingSize}
                      onChange={onServingSizeChange}
                      onIncrement={onServingSizeIncrement}
                      onDecrement={onServingSizeDecrement}
                      step={food.servingSize}
                      required={true}
                      autoFocus={true}
                      max='100'
                    />
                    <div className="FoodItemTools--one">
                        <CommonButton
                          iconClass="add-icon ion-plus-round"
                          buttonText="Add Meal"
                          onClick={onMealSubmit}
                          food={food}
                          active={!!mealServingSize}
                          disabled={!mealServingSize}
                        />
                    </div>
                </MediaQuery>
            </form>
        );
    } else {
        return (
            <div className={canEdit ? "FoodItemTools--two" : "FoodItemTools--one"}>
                {canEdit &&
                  <Link to={`/foods/edit/${food.id}`} style={{textDecoration: 'none'}}>
                      <CommonButton
                        iconClass="edit-icon ion-gear-a"
                        buttonText="Edit"
                      />
                  </Link>
                }
                <CommonButton
                  iconClass="remove-icon ion-trash-a"
                  buttonText={confirmRemove ? "Confirm" : "Remove"}
                  onClick={onRemove}
                  active={confirmRemove}
                />
            </div>
        );
    }
}

export default FoodItemTools;
