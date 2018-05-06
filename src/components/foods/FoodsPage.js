import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFood } from '../../actions/foods';
import FoodsList from '../FoodsList';
import Notification from '../Notification';
import HeaderNavButton from '../HeaderNavButton';
import SearchBar from '../SearchBar';

class FoodsPage extends React.Component {
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

    removeFood = (food) => {
        this.props.dispatch(removeFood(food));
    };

    render() {
        return (
            <div>
                <HeaderNavButton to={'/foods/create'} />
                <Notification notification={this.props.notification} />
                <SearchBar
                  value={this.state.search}
                  onChange={this.onSearchChange}
                  onReset={this.resetSearch}
                />
                <FoodsList
                  foods={this.props.foods.filter(food => food.name.match(this.state.search))}
                  canEdit={true}
                  onRemove={this.removeFood}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items,
  notification: state.foods.notification
});

export default connect(mapStateToProps)(FoodsPage);
