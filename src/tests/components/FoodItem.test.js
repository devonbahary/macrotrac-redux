import React from 'react';
import { shallow } from 'enzyme';
import foods from '../fixtures/foods';
import { FoodItem } from '../../components/FoodItem';

let wrapper;

beforeEach(() => {
    wrapper = shallow(
      <FoodItem
        food={foods[0]}
      />
    );
});

test('should render FoodItem correctly with food item', () => {
    expect(wrapper.find('.FoodItem').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodItem with \'add-meal\' class when addMeal prop provided and state isOpen is true', () => {
    wrapper.setProps({ addMeal: () => {} });
    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.find('li').hasClass('add-meal')).toBe(false);
    wrapper.setState({ isOpen: true });
    expect(wrapper.find('li').hasClass('add-meal')).toBe(true);
});

test('should render FoodItem correctly with no food item', () => {
    wrapper.setProps({ food: undefined });
    expect(wrapper.find('.FoodItem--noneFound').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should toggle isOpen state when header is clicked', () => {
    expect(wrapper.state('isOpen')).toBe(false);
    wrapper.find('.FoodItem__header').simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
    wrapper.find('.FoodItem__header').simulate('click');
    expect(wrapper.state('isOpen')).toBe(false);
});

test('should display FoodItemTools when FoodItem state isOpen is true', () => {
    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.find('FoodItemTools').length).toBe(0);
    wrapper.setState({ isOpen: true });
    expect(wrapper.state('isOpen')).toBe(true);
    expect(wrapper.find('FoodItemTools').length).toBe(1);
});

test('should handle onSubmit', () => {
    const addMeal = jest.fn();
    wrapper.setProps({ addMeal });
    wrapper.setState({ mealServingSize: foods[0].servingSize });
    wrapper.setState({ isOpen: true });
    wrapper.find('FoodItemTools').prop('onMealSubmit')({
      preventDefault: () => {}
    });
    expect(addMeal).toHaveBeenCalledWith(foods[0]);
});

test('should not call addMeal onSubmit when mealServingSize === 0', () => {
    const addMeal = jest.fn();
    wrapper.setProps({ addMeal });
    wrapper.setState({ isOpen: true, mealServingSize: '' });
    wrapper.find('FoodItemTools').prop('onMealSubmit')({
      preventDefault: () => {}
    });
    expect(addMeal).not.toHaveBeenCalled();
});
