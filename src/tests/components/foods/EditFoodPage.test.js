import React from 'react';
import { shallow } from 'enzyme';
import foods from '../../fixtures/foods';
import { EditFoodPage } from '../../../components/foods/EditFoodPage';

let editFood, removeFood, history, wrapper;

beforeEach(() => {
    editFood = jest.fn();
    removeFood = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
      <EditFoodPage
        food={foods[0]}
        editFood={editFood}
        removeFood={removeFood}
        history={history}
      />
    );
});

test('should render EditFoodPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('FoodForm').prop('onSubmit')(foods[0]);
    expect(editFood).toHaveBeenCalledWith(foods[0].id, foods[0]);
    expect(history.push).toHaveBeenCalledWith('/foods');
});

test('should handle onRemove', () => {
    wrapper.find('FoodForm').prop('onRemove')();
    expect(removeFood).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledWith('/foods');
});
