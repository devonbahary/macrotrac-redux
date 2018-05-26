import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';

let onChange, onReset, wrapper;

beforeEach(() => {
    onChange = jest.fn();
    onReset = jest.fn();
    wrapper = shallow(
      <SearchBar
        onChange={onChange}
        onReset={onReset}
      />
    );
});

test('should render SearchBar correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should assign input value from value prop', () => {
    const value = "hello";
    wrapper.setProps({ value });
    expect(wrapper.find('input').html()).toContain(`value=\"${value}\"`);
});

test('should call onChange when input changes', () => {
    const value = { value: 'anything' };
    wrapper.find('input').prop('onChange')({
      target: { value }
    });
    expect(onChange).toHaveBeenCalledWith({ target: { value } });
});

test('should call onReset when reset search icon clicked', () => {
    wrapper.find('.reset-search-icon').simulate('click');
    expect(onReset).toHaveBeenCalled();
});
