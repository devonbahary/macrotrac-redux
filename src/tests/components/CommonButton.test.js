import React from 'react';
import { shallow } from 'enzyme';
import CommonButton from '../../components/CommonButton';

test('should render correctly', () => {
    const wrapper = shallow(<CommonButton iconClass='ion-home' buttonText='text' />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly when disabled', () => {
    const wrapper = shallow(<CommonButton iconClass='ion-home' buttonText='text' disabled={true} />);
    expect(wrapper.find('.CommonButton--disabled').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly when active', () => {
    const wrapper = shallow(<CommonButton iconClass='ion-home' buttonText='text' active={true} />);
    expect(wrapper.find('.CommonButton').hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly as disabled when active but disabled', () => {
    const wrapper = shallow(<CommonButton iconClass='ion-home' buttonText='text' disabled={true} active={true} />);
    expect(wrapper.find('.CommonButton--disabled').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should call onClick prop when clicked on', () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<CommonButton onClick={onClickSpy} />);
    wrapper.find('.CommonButton').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
});
