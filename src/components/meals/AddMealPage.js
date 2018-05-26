import React from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../actions/meals';
import FoodsList from '../FoodsList';
import Notification from '../Notification';
import SearchBar from '../SearchBar';

export class AddMealPage extends React.Component {
    state = {
      search: ''
    };

    onSearchChange = (e) => {
        const search = e.target.value.replace(/[^a-zA-Z ]/, '');
        this.setState(() => ({ search }));
    };

    resetSearch = () => {
        this.setState(() => ({ search: ''}));
    };

    addMeal = (meal) => {
        this.props.addMeal(meal);
        this.props.history.push('/meals');
    };

    render() {
        const filteredFoods = this.props.foods.filter(food => {
            const regExp = new RegExp(this.state.search, 'i');
            return food.name.match(regExp);
        });

        return (
            <div>
                <Notification notification={this.props.notification} />
                <SearchBar
                  value={this.state.search}
                  onChange={this.onSearchChange}
                  onReset={this.resetSearch}
                />
                <FoodsList
                  foods={filteredFoods}
                  addMeal={this.addMeal}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items,
  notification: `Found ${state.foods.items.length} foods.`
});

const mapDispatchToProps = (dispatch) => ({
  addMeal: (meal) => dispatch(addMeal(meal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMealPage);
