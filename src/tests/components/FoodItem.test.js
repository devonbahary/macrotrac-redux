import React from 'react';
import { shallow } from 'enzyme';
import foods from '../fixtures/foods';
import { FoodItem } from '../../components/FoodItem';

test('should render correctly with food item', () => {
    const wrapper = shallow(<FoodItem food={foods[0]} />);
    expect(wrapper.find('.FoodItem').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should render with \'add-meal\' class when addMeal prop provided and state isOpen is true', () => {
    const wrapper = shallow(<FoodItem food={foods[0]} addMeal={() => {}}/>);
    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.find('li').hasClass('add-meal')).toBe(false);
    wrapper.find('.FoodItem__header').simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
    expect(wrapper.find('li').hasClass('add-meal')).toBe(true);
});

test('should render correctly with no food item', () => {
    const wrapper = shallow(<FoodItem />);
    expect(wrapper.find('.FoodItem--noneFound').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should toggle isOpen state when header is clicked', () => {
    const wrapper = shallow(<FoodItem food={foods[0]} />);
    expect(wrapper.state('isOpen')).toBe(false);
    wrapper.find('.FoodItem__header').simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
    wrapper.find('.FoodItem__header').simulate('click');
    expect(wrapper.state('isOpen')).toBe(false);
});

test('should display FoodItemTools when FoodItem state isOpen is true', () => {
    const wrapper = shallow(<FoodItem food={foods[0]} />);
    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.find('FoodItemTools').length).toBe(0);
    wrapper.find('.FoodItem__header').simulate('click');
    expect(wrapper.state('isOpen')).toBe(true);
    expect(wrapper.find('FoodItemTools').length).toBe(1);
});
