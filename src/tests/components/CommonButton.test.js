import React from 'react';
import { shallow } from 'enzyme';
import CommonButton from '../../components/CommonButton';

let onClick, wrapper;

beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(<CommonButton iconClass='ion-home' buttonText='text' onClick={onClick} />);
});

test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly when disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.CommonButton--disabled').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly when active', () => {
    wrapper.setProps({ active: true });
    expect(wrapper.find('.CommonButton').hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly as disabled when active but disabled', () => {
    wrapper.setProps({ disabled: true, active: true });
    expect(wrapper.find('.CommonButton--disabled').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should call onClick prop when clicked on', () => {
    wrapper.find('.CommonButton').simulate('click');
    expect(onClick).toHaveBeenCalled();
});
