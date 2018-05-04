import React from 'react';
import InputRow from '../InputRow';
import LargeButton from '../LargeButton';
import Notification from '../Notification';

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
      servingUnits: this.props.food ? [ ...this.servingUnits, this.props.food.name ] : this.servingUnits
    };

    onNameChange = (e) => {
        const name = e.target.value;
        const updatedServingUnits = this.state.servingUnits.filter(units => units !== this.state.name);
        this.setState(() => ({
          name,
          servingUnits: name.length > 0 ? [ ...updatedServingUnits, name ] : updatedServingUnits
        }));
    };

    onServingSizeChange = (e) => {
        const servingSize = Number(e.target.value);
        if (servingSize > 0) {
            this.setState(() => ({ servingSize }));
        }
    };

    onServingSizeDecrement = () => {
        if (this.state.servingSize > 1) {
            this.setState((prevState) => ({ servingSize: prevState.servingSize - 1 }));
        }
    };

    onServingSizeIncrement = () => {
        this.setState((prevState) => ({ servingSize: prevState.servingSize + 1 }));
    };

    onServingUnitChange = (e) => {
        const servingUnit = Number(e.target.value);
        this.setState(() => ({ servingUnit }));
    };

    onCarbsChange = (e) => {
        const carbs = Number(e.target.value);
        if (carbs >= 0) {
            this.setState(() => ({ carbs }));
        }
    };

    onCarbsDecrement = () => {
        if (this.state.carbs > 0) {
            this.setState((prevState) => ({ carbs: prevState.carbs - 1 }));
        }
    };

    onCarbsIncrement = () => {
        this.setState((prevState) => ({ carbs: prevState.carbs + 1 }));
    };

    onProtChange = (e) => {
        const prot = Number(e.target.value);
        if (prot >= 0) {
            this.setState(() => ({ prot }));
        }
    };

    onProtDecrement = () => {
        if (this.state.prot > 0) {
            this.setState((prevState) => ({ prot: prevState.prot - 1 }));
        }
    };

    onProtIncrement = () => {
        this.setState((prevState) => ({ prot: prevState.prot + 1 }));
    };

    onFatChange = (e) => {
        const fat = Number(e.target.value);
        if (fat >= 0) {
            this.setState(() => ({ fat }));
        }
    };

    onFatDecrement = () => {
        if (this.state.fat > 0) {
            this.setState((prevState) => ({ fat: prevState.fat - 1 }));
        }
    };

    onFatIncrement = () => {
        this.setState((prevState) => ({ fat: prevState.fat + 1 }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.carbs + this.state.prot + this.state.fat > 0) {
            this.setState(() => ({ err: '' }));
            this.props.onSubmit({
              name: this.state.name,
              servingSize: this.state.servingSize,
              servingUnit: this.state.servingUnits[this.state.servingUnit],
              carbs: this.state.carbs,
              prot: this.state.prot,
              fat: this.state.fat
            });
        } else {
            this.setState(() => ({ err: 'Can\'t add an empty-calorie food.' }));
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="FoodForm">
                    <InputRow
                      type="text"
                      value={this.state.name}
                      onChange={this.onNameChange}
                      placeholder="name"
                      autoFocus={true}
                      required={true}
                    />
                    <InputRow
                      type="number"
                      label="Serving Size"
                      value={this.state.servingSize}
                      onChange={this.onServingSizeChange}
                      onIncrement={this.onServingSizeIncrement}
                      onDecrement={this.onServingSizeDecrement}
                      required={true}
                    />
                    <InputRow
                      type="select"
                      label="Serving Units"
                      value={this.state.servingUnit}
                      onChange={this.onServingUnitChange}
                      selectOptions={this.state.servingUnits}
                      required={true}
                    />
                    <InputRow
                      type="number"
                      label="Carbs (g)"
                      value={this.state.carbs}
                      onChange={this.onCarbsChange}
                      onIncrement={this.onCarbsIncrement}
                      onDecrement={this.onCarbsDecrement}
                      required={true}
                    />
                    <InputRow
                      type="number"
                      label="Prot (g)"
                      value={this.state.prot}
                      onChange={this.onProtChange}
                      onIncrement={this.onProtIncrement}
                      onDecrement={this.onProtDecrement}
                      required={true}
                    />
                    <InputRow
                      type="number"
                      label="Fat (g)"
                      value={this.state.fat}
                      onChange={this.onFatChange}
                      onIncrement={this.onFatIncrement}
                      onDecrement={this.onFatDecrement}
                      required={true}
                    />
                    {this.state.err && (
                      <Notification notification={this.state.err} error={true} />
                    )}
                    <LargeButton
                      isSubmit={true}
                      onClick={this.onSubmit}
                      buttonText={this.props.food ? 'Edit Food' : 'Add Food'}
                    />
                    {this.props.includeRemove && (
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
