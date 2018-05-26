import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../../actions/foods';
import FoodForm from './FoodForm';

export const AddFoodPage = (props) => {
    const onSubmit = (food) => {
        props.addFood(food);
        props.history.push('/foods');
    };

    return (
        <div>
            <FoodForm onSubmit={onSubmit} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
  addFood: (food) => dispatch(addFood(food))
});

export default connect(undefined, mapDispatchToProps)(AddFoodPage);
