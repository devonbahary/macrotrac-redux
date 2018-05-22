import React from 'react';
import { shallow } from 'enzyme';
import foods from '../fixtures/foods';
import FoodsList from '../../components/FoodsList';

test('should render correctly with no food data', () => {
    const wrapper = shallow(<FoodsList foods={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with food data', () => {
    const wrapper = shallow(<FoodsList foods={foods} />);
    expect(wrapper).toMatchSnapshot();
});
