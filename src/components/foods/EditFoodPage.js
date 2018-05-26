import React from 'react';
import { connect } from 'react-redux';
import { editFood, removeFood } from '../../actions/foods';
import FoodForm from './FoodForm';

export const EditFoodPage = (props) => {
    const onSubmit = (food) => {
        props.editFood(props.food.id, food);
        props.history.push('/foods');
    };

    const onRemove = () => {
        props.removeFood({ id: props.food.id });
        props.history.push('/foods');
    };

    return (
        <div>
            <FoodForm
              onSubmit={onSubmit}
              food={props.food}
              onRemove={onRemove}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => ({
  food: state.foods.items.find(food => props.match.params.id === food.id)
});

const mapDispatchToProps = (dispatch) => ({
  editFood: (id, food) => dispatch(editFood(id, food)),
  removeFood: (food) => dispatch(removeFood(food))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFoodPage);
