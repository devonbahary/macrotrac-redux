import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { removeFood } from '../../actions/foods';
import FoodsList from '../FoodsList';
import Notification from '../Notification';
import HeaderNavButton from '../HeaderNavButton';
import SearchBar from '../SearchBar';

export class FoodsPage extends React.Component {
    state = {
      search: ''
    };

    componentDidMount() {
        if (this.searchBarHeaderNavNode) {
            this.searchBarHeaderNavNode.scrollIntoView({ behavior: 'smooth' });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.searchBarHeaderNavNode && prevProps.notification !== this.props.notification) {
            this.searchBarHeaderNavNode.scrollIntoView({ behavior: 'smooth' });
        }
    }

    onSearchChange = (e) => {
        const search = e.target.value.replace(/[^a-zA-Z ]/, '');
        this.setState(() => ({ search }));
    };

    resetSearch = () => {
        this.setState(() => ({ search: ''}));
    };

    removeFood = (food) => {
        this.props.removeFood(food);
    };

    render() {
        const filteredFoods = this.props.foods.filter(food => {
            const regExp = new RegExp(this.state.search, 'i');
            return food.name.match(regExp);
        });

        return (
            <div>
                <Notification notification={this.props.notification} />
                <div
                  className="FoodsPage__searchBarHeaderNav"
                  ref={node => this.searchBarHeaderNavNode = node}
                >
                    <SearchBar
                      value={this.state.search}
                      onChange={this.onSearchChange}
                      onReset={this.resetSearch}
                    />
                    <HeaderNavButton to='/foods/create' buttonText="Add Food" />
                </div>
                <FoodsList
                  foods={filteredFoods}
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

const mapDispatchToProps = (dispatch) => ({
  removeFood: (food) => dispatch(removeFood(food))
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsPage);
