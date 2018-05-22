import React from 'react';
import { shallow } from 'enzyme';
import MacrotracLogo from '../../components/MacrotracLogo';

test('should render MacrotracLogo correctly', () => {
    const wrapper = shallow(<MacrotracLogo />);
    expect(wrapper).toMatchSnapshot();
});
