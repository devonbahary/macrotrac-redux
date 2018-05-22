import React from 'react';
import { shallow } from 'enzyme';
import foods from '../fixtures/foods';
import user from '../fixtures/user';
import { MacronutrientGraph } from '../../components/MacronutrientGraph';

test('should render MacronutrientGraph correctly', () => {
    const wrapper = shallow(<MacronutrientGraph {...foods[0]} user={user} />);
    expect(wrapper.find('.MacronutrientGraph').exists()).toBe(true);
    expect(wrapper.find('.MacronutrientGraph--hidden').exists()).toBe(false);
});

test('should render MacronutrientGraph correctly when hidden prop is true', () => {
    const wrapper = shallow(<MacronutrientGraph {...foods[0]} hidden={true} user={user} />);
    expect(wrapper.find('.MacronutrientGraph').exists()).toBe(false);
    expect(wrapper.find('.MacronutrientGraph--hidden').exists()).toBe(true);
});
