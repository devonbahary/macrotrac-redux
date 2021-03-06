import React from 'react';
import { connect } from 'react-redux';
import { removeMeal } from '../../actions/meals';
import FoodsList from '../FoodsList';
import HeaderNavButton from '../HeaderNavButton';
import ClearMealsButton from './ClearMealsButton';
import Time from './Time';
import MacronutrientGraph from '../MacronutrientGraph';

export class MealsPage extends React.Component {
    removeMeal = (meal) => {
        this.props.removeMeal(meal);
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

const mapDispatchToProps = (dispatch) => ({
  removeMeal: (meal) => dispatch(removeMeal(meal))
});

export default connect(mapStateToProps, mapDispatchToProps)(MealsPage);
