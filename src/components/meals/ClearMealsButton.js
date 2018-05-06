import React from 'react';
import { connect } from 'react-redux';
import { clearMeals } from '../../actions/meals';
import FoodItemTool from '../FoodItemTool';

class ClearMealsButton extends React.Component {
    state = {
      confirmClear: false
    };

    onClick = () => {
        if (this.props.meals.length > 0) {
            if (this.state.confirmClear) {
              this.props.dispatch(clearMeals());
              this.setState(() => ({ confirmClear: false }));
            } else {
              this.setState(() => ({ confirmClear: true }));
            }
        }
    };

    onCancel = () => {
        this.setState(() => ({ confirmClear: false }));
    }

    render() {
        return (
            <div className={this.state.confirmClear ? "ClearMealsButton active" : "ClearMealsButton"}>
                <FoodItemTool
                  iconClass="clear-icon ion-trash-b"
                  buttonText={this.props.meals.length > 0 && this.state.confirmClear ? 'Confirm' : 'Clear'}
                  onClick={this.onClick}
                  active={this.props.meals.length > 0 && this.state.confirmClear}
                />
                {this.props.meals.length > 0 && this.state.confirmClear &&
                  <FoodItemTool
                    iconClass="cancel-clear-icon ion-close-round"
                    buttonText="Cancel"
                    onClick={this.onCancel}
                  />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  meals: state.meals
});

export default connect(mapStateToProps)(ClearMealsButton);