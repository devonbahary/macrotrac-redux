import React from 'react';
import { shallow } from 'enzyme';
import HeaderNavButton from '../../components/HeaderNavButton';

test('should render HeaderNavButton correctly', () => {
    const wrapper = shallow(<HeaderNavButton to='/meals' buttonText='Add Meal' />);
    expect(wrapper).toMatchSnapshot();
});
