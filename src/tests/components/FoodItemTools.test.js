import React from 'react';
import { shallow } from 'enzyme';
import foods from '../fixtures/foods';
import FoodItemTools from '../../components/FoodItemTools';

test('should render FoodItemTools with a form if passed mealServingSize prop', () => {
    const wrapper = shallow(<FoodItemTools food={foods[0]} mealServingSize={1.2} />);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodItemTools without a form if not passed mealServingSize prop', () => {
    const wrapper = shallow(<FoodItemTools food={foods[0]} />);
    expect(wrapper.find('form').length).toBe(0);
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodItemTools with unique className and one CommonButton if canEdit prop is false', () => {
    const wrapper = shallow(<FoodItemTools food={foods[0]} />);
    expect(wrapper.find('CommonButton').length).toBe(1);
    expect(wrapper.find('.FoodItemTools--one').exists()).toBe(true);
    expect(wrapper.find('.FoodItemTools--two').exists()).toBe(false);
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodItemTools with unique className and two CommonButtons if canEdit prop is true', () => {
    const wrapper = shallow(<FoodItemTools food={foods[0]} canEdit={true} />);
    expect(wrapper.find('CommonButton').length).toBe(2);
    expect(wrapper.find('.FoodItemTools--one').exists()).toBe(false);
    expect(wrapper.find('.FoodItemTools--two').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodItemTools with appropriate CommonButton text when confirmRemove prop is false', () => {
    const wrapper = shallow(<FoodItemTools food={foods[0]} confirmRemove={false} />);
    expect(wrapper.find('CommonButton').prop('buttonText')).toBe("Remove");
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodItemTools with appropriate CommonButton text when confirmRemove prop is true', () => {
    const wrapper = shallow(<FoodItemTools food={foods[0]} confirmRemove={true} />);
    expect(wrapper.find('CommonButton').prop('buttonText')).toBe("Confirm");
    expect(wrapper).toMatchSnapshot();
});
