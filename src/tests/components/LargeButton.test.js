import React from 'react';
import { shallow } from 'enzyme';
import LargeButton from '../../components/LargeButton';

test('should render LargeButton correctly', () => {
    const wrapper = shallow(<LargeButton />);
    expect(wrapper).toMatchSnapshot();
});

test('should render button[type=\'button\'] if isSubmit prop not passed', () => {
    const wrapper = shallow(<LargeButton />);
    expect(wrapper.html()).toContain("type=\"button\"");
});

test('should render button[type=\'submit\'] if isSubmit prop passed', () => {
    const wrapper = shallow(<LargeButton isSubmit={true} />);
    expect(wrapper.html()).toContain("type=\"submit\"");
});

test('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LargeButton onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
});

test('should include buttonText prop', () => {
    const buttonText = "Click Me";
    const wrapper = shallow(<LargeButton buttonText={buttonText} />);
    expect(wrapper.html()).toContain(buttonText);
});

test('should disable button if disabled prop is passed', () => {
  const wrapper = shallow(<LargeButton disabled={true} />);
  expect(wrapper.html()).toContain("disabled=\"\"");
});
