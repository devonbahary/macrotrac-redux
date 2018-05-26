import React from 'react';
import { shallow } from 'enzyme';
import foods from '../../fixtures/foods';
import meals from '../../fixtures/meals';
import { AddMealPage } from '../../../components/meals/AddMealPage';

let addMeal, notification, history, wrapper;

beforeEach(() => {
    addMeal = jest.fn();
    notification = 'hello';
    history = { push: jest.fn() };
    wrapper = shallow(
      <AddMealPage
        foods={foods}
        notification='hello'
        addMeal={addMeal}
        history={history}
      />
    );
});

test('should render AddMealPage correctly with empty foods prop', () => {
    wrapper.setProps({ foods: [] })
    expect(wrapper).toMatchSnapshot();
});

test('should render AddMealPage correctly with foods prop', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set search state on valid SearchBar onChange', () => {
    const value = 'Chipotle';
    wrapper.find('SearchBar').prop('onChange')({ target: { value } });
    expect(wrapper.state('search')).toBe(value);
});

test('should set filtered search state on invalid SearchBar onChange', () => {
    const unfilteredValue = '(';
    const value = '';
    wrapper.find('SearchBar').prop('onChange')({ target: { value: unfilteredValue } });
    expect(wrapper.state('search')).toBe(value);
});

test('should pass all foods to FoodsList foods prop when search state \'\'', () => {
    expect(wrapper.find('FoodsList').prop('foods')).toEqual(foods);
});

test('should pass only filtered foods to FoodsList foods prop when search state set', () => {
    expect(wrapper.find('FoodsList').prop('foods')).toEqual(foods);
    wrapper.find('SearchBar').prop('onChange')({ target: { value: 'a' } });
    wrapper.update();
    expect(wrapper.find('FoodsList').prop('foods')).toEqual([ foods[0], foods[1] ]);
});

test('should handle addMeal', () => {
    wrapper.find('FoodsList').prop('addMeal')(meals[0]);
    expect(history.push).toHaveBeenCalledWith('/meals');
    expect(addMeal).toHaveBeenCalledWith(meals[0]);
});
