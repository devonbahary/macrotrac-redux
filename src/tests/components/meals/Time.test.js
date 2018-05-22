import React from 'react';
import { shallow } from 'enzyme';
import Time from '../../../components/meals/Time';

test('should render Time correctly', () => {
    const wrapper = shallow(<Time />);
    expect(wrapper).toMatchSnapshot();
});
