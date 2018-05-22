import React from 'react';
import { shallow } from 'enzyme';
import Notification from '../../components/Notification';

test('should render uniquely for success', () => {
    const notification = 'You had success!';
    const wrapper = shallow(<Notification success={true} notification={notification} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render uniquely for error', () => {
    const notification = 'You had an error!';
    const wrapper = shallow(<Notification error={true} notification={notification} />);
    expect(wrapper).toMatchSnapshot();
});
