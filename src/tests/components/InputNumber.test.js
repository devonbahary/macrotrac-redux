import React from 'react';
import { shallow } from 'enzyme';
import InputNumber from '../../components/InputNumber';

test('should render InputNumber correctly', () => {
    const wrapper = shallow(<InputNumber />);
    expect(wrapper).toMatchSnapshot();
});

test('should set value to input from value prop', () => {
    const value = 9;
    const wrapper = shallow(<InputNumber value={value} onChange={() => {}} />);
    expect(wrapper.find('input').html()).toContain(`value=\"${value}\"`);
});

test('should set max to input from max prop', () => {
    const max = '100';
    const wrapper = shallow(<InputNumber max={max} />);
    expect(wrapper.find('input').html()).toContain(`max=\"${max}\"`);
});

test('should call onChange prop on input change', () => {
    const onChangeSpy = jest.fn();
    const event = { target: { value: 4 } };
    const wrapper = shallow(<InputNumber value={2} onChange={onChangeSpy} />);
    wrapper.find('input').simulate('change', event);
    expect(onChangeSpy).toHaveBeenCalledWith(event);
});

test('should call onDecrement prop when decrement button clicked', () => {
    const onDecrementSpy = jest.fn();
    const wrapper = shallow(<InputNumber onDecrement={onDecrementSpy} />);
    wrapper.find('.InputNumber__button--decrement').simulate('click');
    expect(onDecrementSpy).toHaveBeenCalled();
});

test('should call onIncrement prop when decrement button clicked', () => {
    const onIncrementSpy = jest.fn();
    const wrapper = shallow(<InputNumber onIncrement={onIncrementSpy} />);
    wrapper.find('.InputNumber__button--increment').simulate('click');
    expect(onIncrementSpy).toHaveBeenCalled();
});
