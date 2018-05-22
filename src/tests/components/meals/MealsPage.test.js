import React from 'react';
import { shallow } from 'enzyme';
import { MealsPage } from '../../../components/meals/MealsPage';

test('should render MealsPage correctly', () => {
    const wrapper = shallow(<MealsPage meals={[]} />);
    expect(wrapper).toMatchSnapshot();
});
