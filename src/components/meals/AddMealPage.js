import React from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../actions/meals';
import FoodsList from '../FoodsList';
import Notification from '../Notification';
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
                <Notification notification={this.props.notification} />
                <SearchBar
                  value={this.state.search}
                  onChange={this.onSearchChange}
                  onReset={this.resetSearch}
                />
                <FoodsList
                  foods={this.props.foods.filter(food => {
                      const regExp = new RegExp(this.state.search, 'i');
                      return food.name.match(regExp);
                  })}
                  addMeal={this.addMeal}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items,
  notification: state.foods.notification
});

export default connect(mapStateToProps)(AddMealPage);
