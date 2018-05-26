import React from 'react';
import { shallow } from 'enzyme';
import meals from '../../fixtures/meals';
import { MealsPage } from '../../../components/meals/MealsPage';

test('should render MealsPage correctly', () => {
    const wrapper = shallow(<MealsPage meals={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle removeMeal', () => {
    const removeMeal = jest.fn();
    const wrapper = shallow(<MealsPage meals={[]} removeMeal={removeMeal} />);
    wrapper.find('FoodsList').prop('onRemove')(meals[0]);
    expect(removeMeal).toHaveBeenCalledWith(meals[0]);
});
