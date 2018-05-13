import React from 'react';
import { connect } from 'react-redux';
import { totalCalories } from '../utils/utils';
import FoodItemTools from './FoodItemTools';
import MacronutrientGraph from './MacronutrientGraph';

class FoodItem extends React.Component {
    state = {
      isOpen: false,
      confirmRemove: false,
      food: this.props.food,
      mealServingSize: this.props.addMeal ? this.props.food.servingSize : null
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
          mealServingSize: this.props.addMeal ? this.props.food.servingSize : null
        }));
        if (this.props.addMeal) {
            this.updateServingSize(this.props.food.servingSize);
        }
    }

    handleRemove = () => {
        this.state.confirmRemove ? this.props.onRemove(this.props.food) : this.setState(() => ({ confirmRemove: true }));
    };

    onServingSizeChange = (e) => {
        const mealServingSize = Number(e.target.value);
        this.updateServingSize(mealServingSize);
    };

    onServingSizeIncrement = () => {
        this.updateServingSize(this.state.mealServingSize + 1);
    };

    onServingSizeDecrement = () => {
        if (this.state.mealServingSize > 1) {
            this.updateServingSize(this.state.mealServingSize - 1);
        }
    };

    updateServingSize = (mealServingSize) => {
        if (mealServingSize) {
            this.setState((prevState) => ({
              ...prevState,
              mealServingSize,
              food: {
                ...prevState.food,
                servingSize: mealServingSize,
                carbs: Math.round(prevState.food.carbs * mealServingSize / prevState.food.servingSize * 10) / 10,
                prot: Math.round(prevState.food.prot * mealServingSize / prevState.food.servingSize * 10) / 10,
                fat: Math.round(prevState.food.fat * mealServingSize / prevState.food.servingSize * 10) / 10
              }
            }));
        }
    };

    onMealSubmit = (e) => {
        e.preventDefault();
        this.props.addMeal(this.state.food);
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

export default connect()(FoodItem);
