import React from 'react';
import InputNumber from '../InputNumber';
import InputRow from '../InputRow';
import LargeButton from '../LargeButton';

class UserForm extends React.Component {
  state = {
    calorieGoal: this.props.user.calorieGoal,
    carbsRatioGoal: this.props.user.carbsRatioGoal,
    protRatioGoal: this.props.user.protRatioGoal,
    fatRatioGoal: this.props.user.fatRatioGoal,
    hasChanged: false
  };

  onCalorieGoalChange = (e) => {
      const calorieGoal = Number(e.target.value);
      if (calorieGoal > 0) {
          this.setState(() => ({
            calorieGoal,
            hasChanged: true
          }));
      }
  };

  onCalorieGoalDecrement = () => {
      if (this.state.calorieGoal > 100) {
          this.setState((prevState) => ({
            calorieGoal: prevState.calorieGoal - 100,
            hasChanged: true
          }));
      }
  };

  onCalorieGoalInrement = () => {
      this.setState((prevState) => ({
        calorieGoal: prevState.calorieGoal + 100,
        hasChanged: true
      }));
  };

  onCarbsRatioGoalChange = (e) => {
      const carbsRatioGoal = Number(e.target.value);
      if (carbsRatioGoal >= 0) {
          this.setState(() => ({
            carbsRatioGoal,
            hasChanged: true
          }));
      }
  };

  onCarbsRatioGoalDecrement = () => {
      if (this.state.carbsRatioGoal > 0) {
          this.setState((prevState) => ({
            carbsRatioGoal: prevState.carbsRatioGoal - 1,
            hasChanged: true
          }));
      }
  };

  onCarbsRatioGoalIncrement = () => {
      this.setState((prevState) => ({
        carbsRatioGoal: prevState.carbsRatioGoal + 1,
        hasChanged: true
      }));
  };

  onProtRatioGoalChange = (e) => {
      const protRatioGoal = Number(e.target.value);
      if (protRatioGoal >= 0) {
          this.setState(() => ({
            protRatioGoal,
            hasChanged: true
          }));
      }
  };

  onProtRatioGoalDecrement = () => {
      if (this.state.protRatioGoal > 0) {
          this.setState((prevState) => ({
            protRatioGoal: prevState.protRatioGoal - 1,
            hasChanged: true
          }));
      }
  };

  onProtRatioGoalIncrement = () => {
      this.setState((prevState) => ({
        protRatioGoal: prevState.protRatioGoal + 1,
        hasChanged: true
      }));
  };

  onFatRatioGoalChange = (e) => {
      const fatRatioGoal = Number(e.target.value);
      if (fatRatioGoal >= 0) {
          this.setState(() => ({
            fatRatioGoal,
            hasChanged: true
          }));
      }
  };

  onFatRatioGoalDecrement = () => {
      if (this.state.fatRatioGoal > 0) {
          this.setState((prevState) => ({
            fatRatioGoal: prevState.fatRatioGoal - 1,
            hasChanged: true
          }));
      }
  };

  onFatRatioGoalIncrement = () => {
      this.setState((prevState) => ({
        fatRatioGoal: prevState.fatRatioGoal + 1,
        hasChanged: true
      }));
  };

  onSubmit = (e) => {
      e.preventDefault();
      if (this.state.carbsRatioGoal + this.state.protRatioGoal + this.state.fatRatioGoal !== 100) {
          this.props.onError();
      } else {
          this.setState(() => ({ hasChanged: false }));
          this.props.onSubmit({
            calorieGoal: this.state.calorieGoal,
            carbsRatioGoal: this.state.carbsRatioGoal,
            protRatioGoal: this.state.protRatioGoal,
            fatRatioGoal: this.state.fatRatioGoal
          });
      }
  };

  render() {
      return (
          <div>
              {this.state.err && <p className="error">{this.state.err}</p>}
              <form onSubmit={this.onSubmit} className="UserForm">
                  <InputRow
                    addClass="--cals"
                    type="number"
                    label="Calorie Goal"
                    value={this.state.calorieGoal}
                    onChange={this.onCalorieGoalChange}
                    onIncrement={this.onCalorieGoalInrement}
                    onDecrement={this.onCalorieGoalDecrement}
                    step="100"
                  />
                  <InputRow
                    addClass="--carbs"
                    type="number"
                    label="Carbs Ratio (%)"
                    value={this.state.carbsRatioGoal}
                    onChange={this.onCarbsRatioGoalChange}
                    onIncrement={this.onCarbsRatioGoalIncrement}
                    onDecrement={this.onCarbsRatioGoalDecrement}
                  />
                  <InputRow
                    addClass="--prot"
                    type="number"
                    label="Prot Ratio (%)"
                    value={this.state.protRatioGoal}
                    onChange={this.onProtRatioGoalChange}
                    onIncrement={this.onProtRatioGoalIncrement}
                    onDecrement={this.onProtRatioGoalDecrement}
                  />
                  <InputRow
                    addClass="--fat"
                    type="number"
                    label="Fat Ratio (%)"
                    value={this.state.fatRatioGoal}
                    onChange={this.onFatRatioGoalChange}
                    onIncrement={this.onFatRatioGoalIncrement}
                    onDecrement={this.onFatRatioGoalDecrement}
                  />
                  <LargeButton
                    isSubmit={true}
                    onClick={this.onSubmit}
                    buttonText="Save Changes"
                    disabled={!this.state.hasChanged}
                  />
              </form>
          </div>
      );
  }
}

export default UserForm;
