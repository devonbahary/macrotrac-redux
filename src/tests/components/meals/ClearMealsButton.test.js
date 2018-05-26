import React from 'react';
import { shallow } from 'enzyme';
import meals from '../../fixtures/meals';
import { ClearMealsButton } from '../../../components/meals/ClearMealsButton';


let clearMeals, wrapper;

beforeEach(() => {
    clearMeals = jest.fn();
    wrapper = shallow(
      <ClearMealsButton
        meals={meals}
        clearMeals={clearMeals}
      />
    );
});

test('should render ClearMealsButton correctly with meals', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ClearMealsButton correctly with empty meals', () => {
    wrapper.setProps({ meals: [] })
    expect(wrapper).toMatchSnapshot();
});

test('should NOT set confirmClear state when \'clear\' CommonButton is clicked and empty meals', () => {
    const wrapper = shallow(<ClearMealsButton meals={[]} />);
    wrapper.find('CommonButton').simulate('click');
    expect(wrapper.state('confirmClear')).toBe(false);
});

test('should set confirmClear state when \'clear\' CommonButton is clicked and meals > 0', () => {
    expect(wrapper.state('confirmClear')).toBe(false);
    wrapper.find('CommonButton').simulate('click');
    expect(wrapper.state('confirmClear')).toBe(true);
});

test('should render \'cancel\' CommonButton when confirmClear state is true', () => {
    expect(wrapper.find('CommonButton').length).toBe(1);
    wrapper.setState({ confirmClear: true });
    expect(wrapper.find('CommonButton').length).toBe(2);
});

test('should reset confirmClear state (to false) when \'cancel\' CommonButton is clicked, meals > 0 and confirmClear is true', () => {
    expect(wrapper.state('confirmClear')).toBe(false);
    wrapper.find('CommonButton').simulate('click');
    expect(wrapper.state('confirmClear')).toBe(true);
    wrapper.find('CommonButton').at(1).simulate('click');
    expect(wrapper.state('confirmClear')).toBe(false);
});

test('should change \'clear\' CommonButton text from \'clear\' to \'confirm\' when confirmClear state changes to true', () => {
    expect(wrapper.state('confirmClear')).toBe(false);
    expect(wrapper.find('CommonButton').prop('buttonText')).toBe('Clear');
    wrapper.find('CommonButton').simulate('click');
    expect(wrapper.state('confirmClear')).toBe(true);
    expect(wrapper.find('CommonButton').at(0).prop('buttonText')).toBe('Confirm');
});

test('should call dispatch prop when \'confirm\' CommonButton when confirmClear state is true and then set confirmClear state to false', () => {
    wrapper.find('CommonButton').simulate('click');
    expect(wrapper.state('confirmClear')).toBe(true);
    expect(clearMeals).not.toHaveBeenCalled();
    wrapper.find('CommonButton').at(0).simulate('click');
    expect(clearMeals).toHaveBeenCalled();
    expect(wrapper.state('confirmClear')).toBe(false);
});
