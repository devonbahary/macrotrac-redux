import React from 'react';
import { shallow } from 'enzyme';
import user from '../../fixtures/user';
import UserMacrosGraph from '../../../components/user/UserMacrosGraph';

test('should render correctly for a given user', () => {
    const wrapper = shallow(<UserMacrosGraph user={user} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly for a given user at 100 for all values', () => {
    const wrapper = shallow(<UserMacrosGraph user={{
      ...user,
      carbsRatioGoal: 100,
      protRatioGoal: 100,
      fatRatioGoal: 100
    }} />);
    expect(wrapper).toMatchSnapshot('user-100');
});

test('should render the same for a given user at 100+ for all values as a user at 100 for all values', () => {
    const wrapper = shallow(<UserMacrosGraph user={{
      ...user,
      carbsRatioGoal: 101,
      protRatioGoal: 120,
      fatRatioGoal: 205
    }} />);
    expect(wrapper).toMatchSnapshot('user-100');
});
