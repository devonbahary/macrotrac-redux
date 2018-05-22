import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';

test('should render SearchBar correctly', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
})

test('should assign input value from value prop', () => {
    const value = "hello";
    const wrapper = shallow(<SearchBar value={value} onChange={() => {}} />);
    expect(wrapper.find('input').html()).toContain(`value=\"${value}\"`);
});

test('should call onChange when input changes', () => {
    const value = { value: 'anything' };
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<SearchBar value='' onChange={onChangeSpy} />);
    wrapper.find('input').prop('onChange')({
      target: { value }
    });
    expect(onChangeSpy).toHaveBeenCalledWith({ target: { value } });
});

test('should call onReset when reset search icon clicked', () => {
    const onResetSpy = jest.fn();
    const wrapper = shallow(<SearchBar onReset={onResetSpy} />);
    wrapper.find('.reset-search-icon').simulate('click');
    expect(onResetSpy).toHaveBeenCalled();
});
