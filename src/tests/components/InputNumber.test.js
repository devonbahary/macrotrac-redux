import React from 'react';
import { shallow } from 'enzyme';
import InputNumber from '../../components/InputNumber';


let onChange, onDecrement, onIncrement, wrapper;

beforeEach(() => {
    onChange = jest.fn();
    onDecrement = jest.fn();
    onIncrement = jest.fn();
    wrapper = shallow(
      <InputNumber
        onChange={onChange}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onChange={onChange}
      />
    );
});

test('should render InputNumber correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set value to input from value prop', () => {
    const value = 9;
    wrapper.setProps({ value });
    expect(wrapper.find('input').html()).toContain(`value=\"${value}\"`);
});

test('should set max to input from max prop', () => {
    const max = '100';
    wrapper.setProps({ max });
    expect(wrapper.find('input').html()).toContain(`max=\"${max}\"`);
});

test('should call onChange prop on input change', () => {
    const event = { target: { value: 4 } };
    wrapper.find('input').simulate('change', event);
    expect(onChange).toHaveBeenCalledWith(event);
});

test('should call onDecrement prop when decrement button clicked', () => {
    wrapper.find('.InputNumber__button--decrement').simulate('click');
    expect(onDecrement).toHaveBeenCalled();
});

test('should call onIncrement prop when decrement button clicked', () => {
    wrapper.find('.InputNumber__button--increment').simulate('click');
    expect(onIncrement).toHaveBeenCalled();
});
