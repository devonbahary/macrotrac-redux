import React from 'react';
import { connect } from 'react-redux';
import { editFood, removeFood } from '../../actions/foods';
import FoodForm from './FoodForm';

const EditFoodPage = (props) => {
    const onSubmit = (food) => {
        props.dispatch(editFood(props.food.id, food));
        props.history.push('/foods');
    };

    const onRemove = () => {
        props.dispatch(removeFood(props.food));
        props.history.push('/foods');
    };

    return (
        <div>
            <h3>Edit Food</h3>
            <FoodForm onSubmit={onSubmit} food={props.food} />
            <button onClick={onRemove}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
  food: state.foods.find(food => props.match.params.id === food.id)
});

export default connect(mapStateToProps)(EditFoodPage);
