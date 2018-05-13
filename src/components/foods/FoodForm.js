import React from 'react';
import MediaQuery from 'react-responsive';
import InputField from '../InputField';
import LargeButton from '../LargeButton';
import Notification from '../Notification';
import MacronutrientGraph from '../MacronutrientGraph';

class FoodForm extends React.Component {
    servingUnits = [
      'gram (g)',
      'ounce (oz)',
      'pound (lb)',
      'teaspoon (tsp)',
      'tablespoon (Tbsp)',
      'cup (c)',
      'pint (p)',
      'quart (q)',
      'gallon (gal)'
    ];

    state = {
      name: this.props.food ? this.props.food.name : '',
      servingSize: this.props.food ? this.props.food.servingSize : 1,
      servingUnit: this.props.food ?
        this.props.food.name === this.props.food.servingUnit ? (
          this.servingUnits.length
        ) : (
          this.servingUnits.indexOf(this.props.food.servingUnit)
        ) : 0,
      carbs: this.props.food ? this.props.food.carbs : 0,
      prot: this.props.food ? this.props.food.prot : 0,
      fat: this.props.food ? this.props.food.fat : 0,
      err: '',
      servingUnits: this.props.food ? [ ...this.servingUnits, this.props.food.name ] : this.servingUnits,
      hasChanged: false
    };

    onNameChange = (e) => {
        const name = e.target.value;
        const updatedServingUnits = this.state.servingUnits.filter(units => units !== this.state.name);
        this.setState(() => ({
          name,
          servingUnits: name.length > 0 ? [ ...updatedServingUnits, name ] : updatedServingUnits,
          hasChanged: true
        }));
    };

    onServingSizeChange = (e) => {
        const servingSize = e.target.value;
        this.setState(() => ({
          servingSize,
          hasChanged: true
        }));
    };

    onServingSizeIncrement = () => {
        this.setState((prevState) => ({
          servingSize: Math.round((Number(prevState.servingSize) + (this.props.food ? this.props.food.servingSize : 1)) * 10) / 10,
          hasChanged: true
        }));
    };

    onServingSizeDecrement = () => {
        this.setState((prevState) => ({
          servingSize: Math.max(0, Math.round((Number(prevState.servingSize) - (this.props.food ? this.props.food.servingSize : 1)) * 10) / 10),
          hasChanged: true
        }));
    };

    onServingUnitChange = (e) => {
        const servingUnit = e.target.value;
        this.setState(() => ({
          servingUnit,
          hasChanged: true
        }));
    };

    onCarbsChange = (e) => {
        const carbs = e.target.value;
        if (!carbs || carbs.match(/^\d{0,}(\.\d{0,1})?$/)) {
            this.setState(() => ({
              carbs,
              hasChanged: true
            }));
        }
    };

    onCarbsIncrement = () => {
        this.setState((prevState) => ({
          carbs: Math.round((Number(prevState.carbs) + 1) * 10) / 10,
          hasChanged: true
        }));
    };

    onCarbsDecrement = () => {
        this.setState((prevState) => ({
          carbs: Math.max(0, Math.round((Number(prevState.carbs) - 1) * 10) / 10),
          hasChanged: true
        }));
    };

    onProtChange = (e) => {
        const prot = e.target.value;
        if (!prot || prot.match(/^\d{0,}(\.\d{0,1})?$/)) {
            this.setState(() => ({
              prot,
              hasChanged: true
            }));
        }
    };

    onProtIncrement = () => {
        this.setState((prevState) => ({
          prot: Math.round((Number(prevState.prot) + 1) * 10) / 10,
          hasChanged: true
        }));
    };

    onProtDecrement = () => {
        this.setState((prevState) => ({
          prot: Math.max(0, Math.round((Number(prevState.prot) - 1) * 10) / 10),
          hasChanged: true
        }));
    };

    onFatChange = (e) => {
        const fat = e.target.value;
        if (!fat || fat.match(/^\d{0,}(\.\d{0,1})?$/)) {
            this.setState(() => ({
              fat,
              hasChanged: true
            }));
        }
    };

    onFatIncrement = () => {
        this.setState((prevState) => ({
          fat: Math.round((Number(prevState.fat) + 1) * 10) / 10,
          hasChanged: true
        }));
    };

    onFatDecrement = () => {
        this.setState((prevState) => ({
          fat: Math.max(0, Math.round((Number(prevState.fat) - 1) * 10) / 10),
          hasChanged: true
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (Number(this.state.servingSize) === 0) {
            this.setState(() => ({ err: 'Can\'t have a serving size of 0.' }))
        } else if (Number(this.state.carbs) + Number(this.state.prot) + Number(this.state.fat) === 0) {
            this.setState(() => ({ err: 'Can\'t add an empty-calorie food.' }));
        } else {
            this.setState(() => ({ err: '' }));
            this.props.onSubmit({
              name: this.state.name,
              servingSize: Number(this.state.servingSize),
              servingUnit: this.state.servingUnits[this.state.servingUnit],
              carbs: Number(this.state.carbs),
              prot: Number(this.state.prot),
              fat: Number(this.state.fat)
            });
        }
    }

    render() {
        return (
            <div>
                <MediaQuery minWidth={1224}>
                    <Notification
                      notification={this.state.err || (!!this.props.onRemove ? (
                        'Make changes to your food item.'
                      ) : (
                        'Add a new food item.'
                      ))}
                      error={!!this.state.err} />
                </MediaQuery>
                <form onSubmit={this.onSubmit} className="FoodForm">
                    <InputField
                      type="text"
                      value={this.state.name}
                      onChange={this.onNameChange}
                      placeholder="name"
                      autoFocus={!this.props.onRemove}
                      required={true}
                    />
                    <div className="FoodForm__largeDeviceInputFieldRow--two">
                        <InputField
                          type="number"
                          label="Serving Size"
                          value={this.state.servingSize}
                          onChange={this.onServingSizeChange}
                          onIncrement={this.onServingSizeIncrement}
                          onDecrement={this.onServingSizeDecrement}
                          required={true}
                        />
                        <InputField
                          type="select"
                          label="Serving Units"
                          value={this.state.servingUnit}
                          onChange={this.onServingUnitChange}
                          selectOptions={this.state.servingUnits}
                          required={true}
                        />
                    </div>
                    <MacronutrientGraph food={this.state} />
                    <div className="FoodForm__largeDeviceInputFieldRow--three">
                        <InputField
                          type="number"
                          label="Carbs (g)"
                          value={this.state.carbs}
                          onChange={this.onCarbsChange}
                          onIncrement={this.onCarbsIncrement}
                          onDecrement={this.onCarbsDecrement}
                          required={true}
                        />
                        <InputField
                          type="number"
                          label="Prot (g)"
                          value={this.state.prot}
                          onChange={this.onProtChange}
                          onIncrement={this.onProtIncrement}
                          onDecrement={this.onProtDecrement}
                          required={true}
                        />
                        <InputField
                          type="number"
                          label="Fat (g)"
                          value={this.state.fat}
                          onChange={this.onFatChange}
                          onIncrement={this.onFatIncrement}
                          onDecrement={this.onFatDecrement}
                          required={true}
                        />
                    </div>
                    <MediaQuery maxWidth={1224}>
                        {this.state.err && (
                          <Notification notification={this.state.err} error={true} />
                        )}
                    </MediaQuery>
                    <LargeButton
                      isSubmit={true}
                      buttonText={this.props.food ? 'Edit Food' : 'Add Food'}
                      disabled={!this.state.hasChanged}
                    />
                    {!!this.props.onRemove && (
                      <LargeButton
                        onClick={this.props.onRemove}
                        buttonText="Remove Food"
                        isWarning={true}
                      />
                    )}
                </form>
            </div>
        );
    }
}

export default FoodForm;
