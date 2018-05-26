import React from 'react';
import { shallow } from 'enzyme';
import foods from '../../fixtures/foods';
import { FoodsPage } from '../../../components/foods/FoodsPage';

let wrapper;

beforeEach(() => {
    wrapper = shallow(
      <FoodsPage
        foods={foods}
        notification='hello'
      />
    );
});

test('should render FoodsPage correctly with empty foods prop', () => {
    wrapper.setProps({ foods: [] });
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodsPage correctly with foods prop', () => {
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
    wrapper.setState({ search: 'a'});
    expect(wrapper.find('FoodsList').prop('foods')).toEqual([ foods[0], foods[1] ]);
});

test('should handle onRemove', () => {
    const removeFood = jest.fn();
    wrapper.setProps({ removeFood: removeFood });
    wrapper.find('FoodsList').prop('onRemove')(foods[0]);
    expect(removeFood).toHaveBeenCalledWith(foods[0]);
});
