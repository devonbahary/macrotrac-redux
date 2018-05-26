import React from 'react';
import { shallow } from 'enzyme';
import LargeButton from '../../components/LargeButton';

let onClick, wrapper;

beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(<LargeButton onClick={onClick}/>);
});

test('should render LargeButton correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render button[type=\'button\'] if isSubmit prop not passed', () => {
    expect(wrapper.html()).toContain("type=\"button\"");
});

test('should render button[type=\'submit\'] if isSubmit prop passed', () => {
    wrapper.setProps({ isSubmit: true});
    expect(wrapper.html()).toContain("type=\"submit\"");
});

test('should call onClick prop when clicked', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
});

test('should include buttonText prop', () => {
    const buttonText = "Click Me";
    wrapper.setProps({ buttonText });
    expect(wrapper.html()).toContain(buttonText);
});

test('should disable button if disabled prop is passed', () => {
  wrapper.setProps({ disabled: true });
  expect(wrapper.html()).toContain("disabled=\"\"");
});
