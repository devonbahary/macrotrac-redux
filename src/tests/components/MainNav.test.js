import React from 'react';
import { shallow } from 'enzyme';
import MainNav from '../../components/MainNav';

test('should render MainNav correctly', () => {
    const wrapper = shallow(<MainNav />);
    expect(wrapper).toMatchSnapshot();
});
