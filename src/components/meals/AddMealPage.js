import React from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../actions/meals';
import FoodsList from '../FoodsList';
import SearchBar from '../SearchBar';

class AddMealPage extends React.Component {
    state = {
      search: ''
    };

    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState(() => ({ search }));
    };

    resetSearch = () => {
        this.setState(() => ({ search: ''}));
    };

    addMeal = (meal) => {
        this.props.dispatch(addMeal(meal));
        this.props.history.push('/meals');
    };

    render() {
        return (
            <div>
                <h3>Add Meal</h3>
                <SearchBar
                  value={this.state.search}
                  onChange={this.onSearchChange}
                  onReset={this.resetSearch}
                />
                <FoodsList
                  foods={this.props.foods.filter(food => food.name.match(this.state.search))}
                  addMeal={this.addMeal}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items
});

export default connect(mapStateToProps)(AddMealPage);
