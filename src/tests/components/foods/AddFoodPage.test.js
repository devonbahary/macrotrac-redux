import React from 'react';
import { shallow } from 'enzyme';
import { AddFoodPage } from '../../../components/foods/AddFoodPage';

test('should render AddFoodPage correctly', () => {
    const wrapper = shallow(<AddFoodPage />);
    expect(wrapper).toMatchSnapshot();
});
