import React from 'react';
import { connect } from 'react-redux';
import { clearMeals } from '../../actions/meals';
import CommonButton from '../CommonButton';

export class ClearMealsButton extends React.Component {
    state = {
      confirmClear: false
    };

    onClick = () => {
        if (this.props.meals.length > 0) {
            if (this.state.confirmClear) {
              this.props.clearMeals();
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
        const buttonText = this.props.meals.length > 0 && this.state.confirmClear ? 'Confirm' : 'Clear';
        const active = this.props.meals.length > 0 && this.state.confirmClear;
        const disabled = this.props.meals.length === 0;

        return (
            <div className={this.state.confirmClear ? "ClearMealsButton active" : "ClearMealsButton"}>
                <CommonButton
                  iconClass="clear-icon ion-trash-b"
                  buttonText={buttonText}
                  onClick={this.onClick}
                  active={active}
                  disabled={disabled}
                />
                {this.props.meals.length > 0 && this.state.confirmClear &&
                  <CommonButton
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

const mapDispatchToProps = (dispatch) => ({
  clearMeals: () => dispatch(clearMeals())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClearMealsButton);
