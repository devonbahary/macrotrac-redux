import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../../actions/foods';
import FoodForm from './FoodForm';

const AddFoodPage = (props) => {
    const onSubmit = (food) => {
        props.dispatch(addFood(food));
        props.history.push('/foods');
    };

    return (
        <div>
            <FoodForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect()(AddFoodPage);
