import React from 'react';
import { Link } from 'react-router-dom';
import FoodItemTool from './FoodItemTool';
import InputRow from './InputRow';

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
    if (mealServingSize) {
        return (
            <form>
                <InputRow
                  type="number"
                  label="Serving Size"
                  value={mealServingSize}
                  onChange={onServingSizeChange}
                  onIncrement={onServingSizeIncrement}
                  onDecrement={onServingSizeDecrement}
                  required={true}
                  autoFocus={true}
                />
                <div className="FoodItemTools--one">
                    <FoodItemTool
                      iconClass="add-icon ion-plus-round"
                      buttonText="Add Meal"
                      onClick={onMealSubmit}
                      food={food}
                    />
                </div>
            </form>

        );
    } else {
        return (
            <div className={canEdit ? "FoodItemTools--two" : "FoodItemTools--one"}>
                {canEdit &&
                  <Link to={`/foods/edit/${food.id}`} style={{textDecoration: 'none'}}>
                      <FoodItemTool
                        iconClass="edit-icon ion-gear-a"
                        buttonText="Edit"
                      />
                  </Link>
                }
                <FoodItemTool
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
