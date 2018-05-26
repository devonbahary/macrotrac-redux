import React from 'react';
import { shallow } from 'enzyme';
import foods from '../../fixtures/foods';
import { AddFoodPage } from '../../../components/foods/AddFoodPage';

test('should render AddFoodPage correctly', () => {
    const wrapper = shallow(<AddFoodPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const addFood = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddFoodPage addFood={addFood} history={history} />);
    wrapper.find('FoodForm').prop('onSubmit')(foods[0]);
    expect(addFood).toHaveBeenCalledWith(foods[0]);
    expect(history.push).toHaveBeenCalledWith('/foods');
});
