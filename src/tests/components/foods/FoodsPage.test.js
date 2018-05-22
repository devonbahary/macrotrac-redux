import React from 'react';
import { shallow } from 'enzyme';
import foods from '../../fixtures/foods';
import { FoodsPage } from '../../../components/foods/FoodsPage';

test('should render FoodsPage correctly with empty foods prop', () => {
    const wrapper = shallow(<FoodsPage foods={[]} notification='hello' />);
    expect(wrapper).toMatchSnapshot();
});

test('should render FoodsPage correctly with foods prop', () => {
    const wrapper = shallow(<FoodsPage foods={foods} notification='hello' />);
    expect(wrapper).toMatchSnapshot();
});

test('should set search state on valid SearchBar onChange', () => {
    const value = 'Chipotle';
    const wrapper = shallow(<FoodsPage foods={[]} />);
    wrapper.find('SearchBar').prop('onChange')({ target: { value } });
    expect(wrapper.state('search')).toBe(value);
});

test('should set filtered search state on invalid SearchBar onChange', () => {
    const unfilteredValue = '(';
    const value = '';
    const wrapper = shallow(<FoodsPage foods={[]} />);
    wrapper.find('SearchBar').prop('onChange')({ target: { value: unfilteredValue } });
    expect(wrapper.state('search')).toBe(value);
});

test('should pass all foods to FoodsList foods prop when search state \'\'', () => {
    const wrapper = shallow(<FoodsPage foods={foods} />);
    expect(wrapper.find('FoodsList').prop('foods')).toEqual(foods);
});

test('should pass only filtered foods to FoodsList foods prop when search state set', () => {
    const wrapper = shallow(<FoodsPage foods={foods} />);
    expect(wrapper.find('FoodsList').prop('foods')).toEqual(foods);
    wrapper.find('SearchBar').prop('onChange')({ target: { value: 'a' } });
    wrapper.update();
    expect(wrapper.find('FoodsList').prop('foods')).toEqual([ foods[0], foods[1] ]);
});
