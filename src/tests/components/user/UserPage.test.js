import React from 'react';
import { shallow } from 'enzyme';
import user from '../../fixtures/user';
import { UserPage } from '../../../components/user/UserPage';

test('should render UserPage correctly', () => {
    const wrapper = shallow(<UserPage user={user} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Notification').prop('notification')).toBe('Adjust your personal goals.');
});

test('should set error state and render UserPage correctly after onError', () => {
    const wrapper = shallow(<UserPage user={user} />);
    expect(wrapper.state('err')).toBe('');
    wrapper.find('UserForm').prop('onError')();
    expect(wrapper.state('err')).toBe('Sum of ratios must be 100%.');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Notification').prop('notification')).toBe('Sum of ratios must be 100%.');
});

test('should call dispatch prop, set updatedUser state to true and err state to \'\' onUserSave', () => {
    const dispatchSpy = jest.fn();
    const wrapper = shallow(<UserPage user={user} dispatch={dispatchSpy} />);
    expect(wrapper.state('updatedUser')).toBe(false);
    wrapper.find('UserForm').prop('onError')();
    expect(wrapper.state('err')).toBe('Sum of ratios must be 100%.');
    wrapper.find('UserForm').prop('onSubmit')(user);
    expect(dispatchSpy).toHaveBeenCalled();
    expect(wrapper.state('updatedUser')).toBe(true);
    expect(wrapper.state('err')).toBe('');
});
