import React from 'react';
import { shallow } from 'enzyme';
import { EditFoodPage } from '../../../components/foods/EditFoodPage';

test('should render EditFoodPage correctly', () => {
    const wrapper = shallow(<EditFoodPage />);
    expect(wrapper).toMatchSnapshot();
});
