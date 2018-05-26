import React from 'react';
import { totalCalories } from '../utils/utils';
import FoodItemTools from './FoodItemTools';
import MacronutrientGraph from './MacronutrientGraph';

export class FoodItem extends React.Component {
    state = {
      isOpen: false,
      confirmRemove: false,
      food: this.props.food,
      mealServingSize: this.props.addMeal ? this.props.food.servingSize : undefined
    };

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.isOpen && this.state.isOpen) {
            this.foodItemNode.scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
          isOpen: !prevState.isOpen,
          confirmRemove: false,
          mealServingSize: this.props.addMeal ? this.props.food.servingSize : undefined
        }));
        if (this.props.addMeal) {
            this.updateServingSize(this.props.food.servingSize);
        }
    }

    handleRemove = () => {
        this.state.confirmRemove ? this.props.onRemove(this.props.food) : this.setState(() => ({ confirmRemove: true }));
    };

    onServingSizeChange = (e) => {
        const mealServingSize = e.target.value;
        if (!mealServingSize || mealServingSize.match(/^\d{0,}(\.\d{0,1})?$/)) {
            this.updateServingSize(mealServingSize);
        }
    };

    onServingSizeIncrement = () => {
        this.updateServingSize(Math.min(100, Math.round((Number(this.state.mealServingSize) + 1) * 10) / 10));
    };

    onServingSizeDecrement = () => {
        this.updateServingSize(Math.max(0, Math.round((Number(this.state.mealServingSize) - 1) * 10) / 10));
    };

    updateServingSize = (mealServingSize) => {
        const servingSize = Number(mealServingSize);
        if (servingSize >= 0 && servingSize <= 100) {
            this.setState((prevState) => ({
              ...prevState,
              mealServingSize,
              food: {
                ...prevState.food,
                servingSize,
                carbs: Math.round(this.props.food.carbs * servingSize / this.props.food.servingSize * 10) / 10,
                prot: Math.round(this.props.food.prot * servingSize / this.props.food.servingSize * 10) / 10,
                fat: Math.round(this.props.food.fat * servingSize / this.props.food.servingSize * 10) / 10
              }
            }));
        }
    };

    onMealSubmit = (e) => {
        e.preventDefault();
        if (this.state.mealServingSize > 0) {
            this.props.addMeal(this.state.food);
        }
    };

    render() {
        if (this.props.food) {
            return (
                <li
                  className={this.state.isOpen ? (
                    this.props.addMeal ? (
                      "FoodItem active add-meal"
                    ) : (
                      "FoodItem active"
                    )) : (
                      "FoodItem"
                    )
                  }
                  ref={node => this.foodItemNode = node}
                >
                    <header className="FoodItem__header" onClick={this.handleClick}>
                        <div className="FoodItem__headerDescription">
                            <div className="FoodItem__headerDescriptionName">
                                {this.state.food.name}
                            </div>
                            <div className="FoodItem__headerDescriptionServings">
                                {this.state.food.servingSize} {this.state.food.servingUnit}
                            </div>
                        </div>
                        <div className="FoodItem__headerCalories">
                            {totalCalories(this.state.food)} cals
                        </div>
                    </header>
                    <div className="FoodItem__body">
                        <MacronutrientGraph food={this.state.food} hidden={!this.state.isOpen} />
                        { this.state.isOpen && (
                          <FoodItemTools
                            food={this.state.food}
                            mealServingSize={this.state.mealServingSize}
                            onServingSizeChange={this.onServingSizeChange}
                            onServingSizeIncrement={this.onServingSizeIncrement}
                            onServingSizeDecrement={this.onServingSizeDecrement}
                            onMealSubmit={this.onMealSubmit}
                            confirmRemove={this.state.confirmRemove}
                            onRemove={this.handleRemove}
                            canEdit={this.props.canEdit}
                          />
                        )}
                    </div>
                </li>
              );
        } else {
            return (
                <li className="FoodItem--noneFound">
                    <header className="FoodItem__header">
                        <div className="FoodItem__headerIcon">
                            <span className="ion-close-round"></span>
                        </div>
                        <div className="FoodItem__headerNoneFound">
                            No food found.
                        </div>
                    </header>
                </li>
            );
        }
    }
}

export default FoodItem;
