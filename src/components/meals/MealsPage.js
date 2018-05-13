import React from 'react';
import { connect } from 'react-redux';
import { removeMeal, clearMeals } from '../../actions/meals';
import FoodsList from '../FoodsList';
import HeaderNavButton from '../HeaderNavButton';
import ClearMealsButton from './ClearMealsButton';
import Time from './Time';
import MacronutrientGraph from '../MacronutrientGraph';

class MealsPage extends React.Component {
    removeMeal = (meal) => {
        this.props.dispatch(removeMeal(meal));
    };

    render() {
        return (
            <div>
                <div className="MealsPage__largeDeviceTimeandMacronutrientGraphContainer">
                    <Time />
                    <MacronutrientGraph />
                </div>
                <div className="MealsPage__largeDeviceHeaderNavButtonContainer">
                    <HeaderNavButton to='/meals/create' buttonText="Add Meal" />
                </div>
                <FoodsList
                  foods={this.props.meals}
                  onRemove={this.removeMeal}
                />
                <ClearMealsButton />
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    meals: state.meals
});

export default connect(mapStateToProps)(MealsPage);
